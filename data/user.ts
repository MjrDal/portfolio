import { saltAndHashPassword } from "@/utils/passwrod/password";
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

export const getUserFromDb = async (email: string, password: string) => {
  const prisma = new PrismaClient();
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    const pwHash = await saltAndHashPassword(password);
    if (user?.password === pwHash) {
      return user;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};
