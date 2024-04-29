"use server";

import { db } from "@/lib/db";
import { AddTagSchema } from "@/schemas/index";
import { z } from "zod";

export const tagAction = async (values: z.infer<typeof AddTagSchema>) => {
  const validateFields = AddTagSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { tag } = validateFields.data;

  await db.tags.create({
    data: { tag },
  });

  return { success: "Tag created" };
};
