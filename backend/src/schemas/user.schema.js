import * as z from "zod";

const email = z.string().email();
const username = z.string().min(1).max(50);

const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters" })
  .max(20, { message: "Password must be under 20 characters" });

const registerSchema = z
  .object({
    email: email,
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const loginSchema = z.object({
  email: email,
  password: passwordSchema,
});

export { loginSchema, registerSchema, username };
