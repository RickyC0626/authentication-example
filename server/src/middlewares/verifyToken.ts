import express from "express";
import jwt from "jsonwebtoken";
import { e } from "../../types/express";

export const verifyToken = (
  req: e.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const auth = req.headers["authorization"];
  const token = auth && auth.split(" ")[1];

  if(!token) return res.sendStatus(401);

  jwt.verify(token, (process.env.JWT_SECRET as string), (err: any, user: any) => {
    if(err) return res.sendStatus(403);

    req.user = user;
    next();
  });
};
