import express, { NextFunction, Request, Response } from "express";
import User from "../models/user";
import authenticate from "../middleware/authenticate";

const router = express.Router();

router.post(
  "/signup",
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        res.status(400).send("Error signing up user.");
      }
      const user = new User({
        username: username,
        password: password,
      });
      await user.save();
      res.json(user);
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/login",
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username, password });
      if (!user) {
        res.status(400).send("User does not exist");
      } else {
        req.session!.username = username;
        res.sendStatus(200);
      }
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/logout",
  authenticate,
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      req.session = null;
      res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  }
);

router.get(
  "/",
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      const isLoggedIn = req.session;
      res.json(isLoggedIn);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
