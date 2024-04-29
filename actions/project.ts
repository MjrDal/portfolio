"use server";

import { db } from "@/lib/db";
import { AddProjectSchema } from "@/schemas/index";
import { z } from "zod";

export const projectAction = async (
  values: z.infer<typeof AddProjectSchema>
) => {
  const validateFields = AddProjectSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const {
    title,
    litleDescription,
    description,
    descktopImage,
    mobileImage,
    tag,
    link,
  } = validateFields.data;

  const tagConnectArray = tag.map((themeId) => ({
    id: themeId,
  }));

  await db.project.create({
    data: {
      title,
      litleDescription,
      description,
      descktopImage,
      mobileImage,
      tag: {
        connect: tagConnectArray,
      },
      link,
    },
  });

  return { success: "Project created" };
};
