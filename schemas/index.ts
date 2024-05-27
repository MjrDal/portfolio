import * as z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, { message: "name is requered" }),
  email: z.string().email({ message: "email is requered" }),
  message: z.string().min(2, { message: "message is requered" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "email is requered" }),
  password: z.string().min(1, { message: "Password is requered" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "email is requered" }),
  password: z.string().min(6, { message: "Minimum 6 characters requiered" }),
});

export const ChangePasswordSchema = z.object({
  lastPassword: z
    .string()
    .min(6, { message: "Minimum 6 characters requiered" }),
  newPassword: z.string().min(6, { message: "Minimum 6 characters requiered" }),
  confirmNewPassword: z
    .string()
    .min(6, { message: "Minimum 6 characters requiered" }),
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
