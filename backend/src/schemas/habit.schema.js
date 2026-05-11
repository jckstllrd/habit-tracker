import * as z from "zod";

const idSchema = z.uuid();
const nameSchema = z.string().min(1);

const habitSchema = z.object({
  name: nameSchema,
  userId: idSchema,
});

export { habitSchema, idSchema, nameSchema };
