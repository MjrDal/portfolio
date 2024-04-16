import * as z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, { message: "name is requered" }),
  email: z.string().email({ message: "email is requered" }),
  message: z.string().min(2, { message: "message is requered" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "email is requered" }),
  password: z.string().min(2, { message: "message is requered" }),
});

export const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});
