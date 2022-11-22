import express from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const accessToken = req.cookies?.access_token;

  if(!accessToken) return res.sendStatus(401);

  jwt.verify(accessToken, (process.env.JWT_SECRET as string), (err: any, decoded: any) => {
    if(err) return res.sendStatus(403);

    next();
  });
};
