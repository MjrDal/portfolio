import * as z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, { message: "name is requered" }),
  email: z.string().email({ message: "email is requered" }),
  message: z.string().min(2, { message: "message is requered" }),
});

export const AddProjectSchema = z.object({
  title: z.string().min(2, { message: "name is requered" }),
});
