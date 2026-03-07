import { Request, Response } from "express";
import User from "@models/User";

export const registerUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { username, email, password, bio } = req.body;

    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      res.status(400).json({
        message: "User with this email or username already exists",
      });
      return;
    }

    const user = new User({
      username,
      email,
      password,
      bio,
    });

    const savedUser = await user.save();

    res.status(201).json({
      message: "User created successfully",
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
