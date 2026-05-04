import * as UserModel from "../models/Users.js";
import bcrypt from "bcryptjs";
import * as UserSchema from "../schemas/user.schema.js";
import { ValidationError } from "../errors/ValidationError.js";
import { ConflictError } from "../errors/ConflictError.js";
import z from "zod";
import jwt from "jsonwebtoken";
import { CustomNotFoundError } from "../errors/CustomNotFoundError.js";
import { AuthenticationError } from "../errors/AuthenticationError.js";

export const registerUser = async (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  try {
    const validUser = UserSchema.registerSchema.parse({
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
    const userExists = await UserModel.getUserByEmail(validUser.email);
    if (userExists) {
      return next(new ConflictError("Invalid Email Address"));
    }

    const hashedPassword = await bcrypt.hash(validUser.password, 10);
    const userId = await UserModel.createUser(validUser.email, hashedPassword);
    const token = jwt.sign(
      { id: userId, email: validUser.email },
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
  const { email, password } = req.body;
  try {
    const validLogin = UserSchema.loginSchema.parse({
      email: email,
      password: password,
    });
    const user = await UserModel.getUserByEmail(validLogin.email);
    if (!user) {
      return next(new AuthenticationError("Invalid Credentials"));
    }
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return next(new AuthenticationError("Invalid Credentials"));
    }
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    );
    res.status(200).json({ token });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return next(new ValidationError("Invalid Credentials"));
    }
    next(error);
  }
};
