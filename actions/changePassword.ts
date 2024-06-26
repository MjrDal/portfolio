"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { ChangePasswordSchema } from "@/schemas";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { z } from "zod";

export const changePassword = async (
  values: z.infer<typeof ChangePasswordSchema>
) => {
  const session = await auth();
  const prisma = new PrismaClient();

  // Vérifiez si l'utilisateur est authentifié
  if (!session?.user.id) {
    return { error: "User not authenticated!" };
  }

  const user = await prisma.user.findUnique({
    where: { id: session?.user.id },
  });

  // Vérifiez si l'utilisateur existe
  if (!user || !user.password) {
    return { error: "User not found or password not set!" };
  }

  const validateFields = ChangePasswordSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { lastPassword, newPassword, confirmNewPassword } = validateFields.data;
  const hashedLastPassword = await bcrypt.hash(lastPassword, 10);
  const hashedNewPassword = await bcrypt.hash(newPassword, 10);
  const passwordMatch = await bcrypt.compare(lastPassword, user?.password);

  if (passwordMatch && hashedLastPassword != hashedNewPassword) {
    await db.user.update({
      where: {
        id: session?.user.id,
      },
      data: { password: hashedNewPassword },
    });
    return { success: "password changed" };
  } else {
    return { error: "password not change" };
  }
};
