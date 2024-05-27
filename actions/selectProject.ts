"use server";

import { db } from "@/lib/db";
import { ProjectRole } from "@prisma/client";

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

export const updateNewId = async (values: string, number: ProjectRole) => {
  if (!values) {
    return { error: "Invalid fields!" };
  }
  console.log(number);

  await db.project.update({
    where: {
      id: values,
    },
    data: { project: number },
  });
  return { success: "project deleted" };
};
