"use server";

import { db } from "@/lib/db";

export const updateLastId = async (values: string) => {
  if (!values) {
    return { error: "Invalid fields!" };
  }

  await db.project.update({
    where: {
      id: values,
    },
    data: { project: "NO" },
  });
  return { success: "project deleted" };
};

export const updateNewId = async (values: string, number: any) => {
  if (!values) {
    return { error: "Invalid fields!" };
  }

  await db.project.update({
    where: {
      id: values,
    },
    data: { project: number },
  });
  return { success: "project deleted" };
};
