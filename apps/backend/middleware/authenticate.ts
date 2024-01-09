import { Request, NextFunction } from "express";

export default function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.session?.username) {
    next();
  } else {
    next(new Error("User is not in session."));
  }
}
