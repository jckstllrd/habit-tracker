import * as z from "zod";

const idSchema = z.number().int().positive();
const loggedSchema = z.iso.date();

const logSchema = z.object({
  id: idSchema,
  logged: loggedSchema,
});

export { idSchema, loggedSchema, logSchema };
