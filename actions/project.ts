"use server";

import { db } from "@/lib/db";
import { AddProjectSchema } from "@/schemas";
import { z } from "zod";

export const projectAction = async (
  values: z.infer<typeof AddProjectSchema>
) => {
  const validateFields = AddProjectSchema.safeParse(values);

  const tagConnectArray = values.tag.map((themeId) => ({
    id: themeId,
  }));

  await db.project.create({
    data: {
      title: values.title,
      litleDescription: values.litleDescription,
      description: values.description,
      descktopImage: values.descktopImage,
      mobileImage: values.mobileImage,
      link: values.link,
      tag: {
        connect: tagConnectArray,
      },
    },
  });

  return { success: "Project created" };
};
