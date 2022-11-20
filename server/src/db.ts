import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { User } from "./entities/User";

const users: User[] = [];

export function getAllUsers() {
  return users;
}

export async function createUser({ username, email, password }: {
  username: string;
  email: string;
  password: string;
}) {
  // Hash password with salt
  const hashed = await bcrypt.hash(password, 10);

  // Create user entity with hashed password stored
  const user: User = {
    id: uuidv4(),
    dateJoined: Date.now(),
    username,
    email,
    hashedPassword: hashed
  };

  // Insert user into database
  users.push(user);
}

export function findUserByUsername(username: string) {
  // const user = await db.findUserById(id);
  return users.find(user => user.username === username);
}

export async function validatePassword(reqPassword: string, hashedPassword: string) {
  return await bcrypt.compare(reqPassword, hashedPassword);
}