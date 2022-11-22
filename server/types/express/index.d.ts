import e from "express";
import jwt from "jsonwebtoken";

declare namespace e {
  interface Request extends e.Request {
    user?: string | jwt.JwtPayload | undefined;
  }
}
