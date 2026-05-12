import * as z from "zod";

const userIdSchema = z.uuid();
const idSchema = z.number().int().positive();
const nameSchema = z.string().min(1);

const habitSchema = z.object({
  name: nameSchema,
  userId: userIdSchema,
});

export { habitSchema, idSchema, nameSchema, userIdSchema };
