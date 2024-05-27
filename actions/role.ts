"use server";

import { db } from "@/lib/db";
import { UserRole } from "@prisma/client";

export const roleAction = async (values: string, role: UserRole) => {
  if (!values) {
    return { error: "Invalid fields!" };
  }

  await db.user.update({
    where: {
      id: values,
    },
    data: { role: role },
  });
  return { success: "role change" };
};
