"use server";

import { signIn } from "@/auth";
import { getUserFromDb } from "@/data/user";
import { SignInSchema } from "@/schemas";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as z from "zod";

export const login = async (values: z.infer<typeof SignInSchema>) => {
  const prisma = new PrismaClient();
  const validateFields = SignInSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validateFields.data;

  const hash = bcrypt.hashSync(password, 10);

  const user = await getUserFromDb(email, hash);

  if (!user) return { error: "User not found!" };

  await signIn("credentials", { email, password: hash });
  return { success: "Vous ete connecter" };
};
