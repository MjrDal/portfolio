import * as z from "zod";

export const ContactSchema = z.object({
  email: z.string().email({ message: "email is requered" }),
  name: z.string().min(2, { message: "name is requered" }),
  text: z.string().min(2, { message: "message is requered" }),
});
