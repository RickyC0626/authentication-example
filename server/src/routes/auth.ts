import express from "express";
import * as jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { createUser, findUserByEmail, findUserByUsername, getAllUsers, validatePassword } from "../db";

const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await getAllUsers();

  res.json(users);
});

/**
 * POST /api/auth/login
 *
 * Request body: username, password
 *
 * Success:
 * - 200 OK: login successful
 *
 * Failure:
 * - 403 Forbidden: user credentials are wrong
 * - 500 Internal Server Error: all other errors
 */
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await findUserByUsername(username);

  if(!user) return res.sendStatus(403);

  try {
    const isPasswordValidated = await validatePassword(password, user.hashedPassword);

    if(!isPasswordValidated) return res.sendStatus(403);

    const token = jwt.sign({ username }, (process.env.JWT_SECRET as string), {
      expiresIn: (process.env.JWT_EXPIRES_IN as string)
    });

    res.status(200).json({ username, token });
  }
  catch {
    res.sendStatus(500);
  }
});

/**
 * POST /api/auth/signup
 *
 * Request body: username, email, password
 *
 * Success:
 * - 201 Created: payload is newly created user
 *
 * Failure:
 * - 400 Bad Request: username or email already exists
 * - 500 Internal Server Error: all other errors
 */
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // If existing username, respond with error
    if(await findUserByUsername(username)) return res.sendStatus(400);

    // If existing email, respond with error
    if(await findUserByEmail(email)) return res.sendStatus(400);

    const user = await createUser({ username, email, password });
    res.status(201).send({ user });
  }
  catch {
    res.sendStatus(500);
  }
});

async function sendVerificationEmail(email: string) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  const testAccount = await nodemailer.createTestAccount();

  // Create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  const otp = generateOTP();

  // Send mail with defined transport object
  const info = await transporter.sendMail({
    from: "Authentication Server <auth@example.com>", // sender address
    to: email, // list of receivers
    subject: "One-Time Email Verification Code", // subject line
    text: `Your one-time verification code, expires in 10 minutes:\n${otp}`, // plain text body
    html: `
      <p>Your one-time verification code, expires in 10 minutes:<p>
      <b>${otp}</b>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

function generateOTP(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

export default router;
