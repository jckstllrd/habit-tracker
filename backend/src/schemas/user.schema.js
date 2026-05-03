import * as z from "zod";

const uuid = z.string().min(1);
const email = z.string().email();
const username = z.string().min(1).max(50);

const passwordSchema = z
  .string()
  .min(8, { message: minLengthErrorMessage })
  .max(20, { message: maxLengthErrorMessage })
  .refine((password) => /[A-Z]/.test(password), {
    message: uppercaseErrorMessage,
  })
  .refine((password) => /[a-z]/.test(password), {
    message: lowercaseErrorMessage,
  })
  .refine((password) => /[0-9]/.test(password), { message: numberErrorMessage })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: specialCharacterErrorMessage,
  });

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

export { registerSchema, username };
