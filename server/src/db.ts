import bcrypt from "bcrypt";
import { Collection, MongoClient } from "mongodb";
import { v4 as uuidv4 } from "uuid";
import { User } from "./entities/User";

const mongoUri = "mongodb://localhost:27017";
const client = new MongoClient(mongoUri);
let usersCollection: Collection<User>;

export async function startDb() {
  try {
    const db = client.db("admin");
    usersCollection = db.collection<User>("users");
  }
  catch(err) {
    console.error(err);
  }
  finally {
    // await client.close();
  }
}

export async function getAllUsers() {
  return await usersCollection.find<User>({}).toArray();
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
    hashedPassword: hashed,
    verified: false
  };

  // Insert user into database
  usersCollection.insertOne(user);
}

export async function findUserByUsername(username: string) {
  return await usersCollection.findOne<User>({ username });
}

export async function validatePassword(reqPassword: string, hashedPassword: string) {
  return await bcrypt.compare(reqPassword, hashedPassword);
}