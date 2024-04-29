"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export const getUserByEmail = async (email: string) => {
  const prisma = new PrismaClient();
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  } catch {
    return null;
  }
};

export const getUserFromDb = async (email: string, password: string) => {
  const prisma = new PrismaClient();
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    console.log(password, user?.password);

    const passwordsMatch = await bcrypt.compare(
      password,
      user?.password as string
    );
    if (passwordsMatch) {
      return user;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};
