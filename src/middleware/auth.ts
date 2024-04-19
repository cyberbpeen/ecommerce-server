import { NextFunction, Request, Response } from "express";
import { validateToken } from "../utils/auth";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearer = req.headers.authorization;

    if (!bearer) throw new Error("No Token");

    const token: string = bearer.split(" ")[1];

    if (!token) throw new Error("Valid Token Required");

    const user = validateToken(token);
    res.locals.user = user;

    next();
  } catch (err) {
    // next(err);
  }
};

export default isAuthenticated;
