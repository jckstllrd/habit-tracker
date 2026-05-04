import * as UserModel from "../models/Users.js";
import bcrypt from "bcryptjs";
import * as UserSchema from "../schemas/user.schema.js";
import { ValidationError } from "../errors/ValidationError.js";
import { ConflictError } from "../errors/ConflictError.js";
import z from "zod";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  try {
    const validUser = UserSchema.registerSchema.parse({
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
    const emailExists = await UserModel.getUserByEmail(validUser.email);
    if (emailExists) {
      return next(new ConflictError("Invalid Email Address"));
    }

    const hashedPassword = await bcrypt.hash(validUser.password, 10);
    const userId = await UserModel.createUser(validUser.email, hashedPassword);
    const token = jwt.sign(
      { userId: userId, email: validUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    );
    res.status(201).json({ token });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return next(new ValidationError("Registration validation failed"));
    }
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  console.log("logging in");
};
