import { PrismaClient } from "@prisma/client";

export const getUserByEmail = async (email: string) => {
  const prisma = new PrismaClient();
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  } catch {
    return null;
  }
};

export const getUserFromDb = async (email: string, pwHash: string) => {
  const prisma = new PrismaClient();
  try {
    const user = await prisma.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};
