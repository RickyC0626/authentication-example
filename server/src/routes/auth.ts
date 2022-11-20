import express from "express";
import bcrypt from "bcrypt";

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
    const hashedPassword = await bcrypt.hash(password, 10);
    const user: User = { username, email, password: hashedPassword };

    users.push(user);
    res.sendStatus(201);
  }
  catch {
    res.sendStatus(500);
  }
});

export default router;
