import * as z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, { message: "name is requered" }),
  email: z.string().email({ message: "email is requered" }),
  message: z.string().min(2, { message: "message is requered" }),
});

export const SignInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(6, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const RegisterSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(6, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const AddProjectSchema = z.object({
  title: z.string().min(2, { message: "title is requered" }),
  litleDescription: z.string().min(2, { message: "title is requered" }),
  description: z.string().min(2, { message: "title is requered" }),
  descktopImage: z.string(),
  mobileImage: z.string().optional(),
  tag: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  link: z.string().url().min(2, { message: "url is requered" }),
});

export const AddTagSchema = z.object({
  tag: z.string().min(2, { message: "tag is requered" }),
});
