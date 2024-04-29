"use server";

import { getUserByEmail } from "@/data/user";
import { RegisterSchema } from "@/schemas";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const prisma = new PrismaClient();
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validateFields.data;

  const hash = bcrypt.hashSync(password, 10);

  const existingEmail = await getUserByEmail(email);

  if (existingEmail) return { error: "Email already in use!" };

  await prisma.user.create({ data: { email, password: hash } });
};
