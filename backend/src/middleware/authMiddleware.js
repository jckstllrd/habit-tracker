import jwt from "jsonwebtoken";
import { AuthenticationError } from "../errors/AuthenticationError.js";

export const authRequest = async (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1] || null;
  if (!token) {
    return next(new AuthenticationError("Authentication Invalid"));
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    return next(new AuthenticationError("Authentication Invalid"));
  }
};
