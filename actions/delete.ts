"use server";

import { db } from "@/lib/db";

export const deletAction = async (values: string) => {
  if (!values) {
    return { error: "Invalid fields!" };
  }

  await db.project.delete({
    where: {
      id: values,
    },
  });
  return { success: "project deleted" };
};

export const deletUserAction = async (values: string) => {
  if (!values) {
    return { error: "Invalid fields!" };
  }

  await db.user.delete({
    where: {
      id: values,
    },
  });
  return { success: "project deleted" };
};
