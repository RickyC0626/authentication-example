import express from "express";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

const router = express.Router();

type User = {
  username: string;
  email: string;
  password: string;
}

const users: User[] = [];

router.get("/users", (req, res) => {
  res.json(users);
});

router.get("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);

  if(!user) return res.sendStatus(403);

  try {
    if(await bcrypt.compare(password, user.password)) {
      res.sendStatus(200);
    }
    else res.sendStatus(403);
  }
  catch {
    res.sendStatus(500);
  }
});

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    await sendVerificationEmail(email);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user: User = { username, email, password: hashedPassword };

    users.push(user);
    res.sendStatus(201);
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
