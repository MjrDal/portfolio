"use server";

import { put } from "@vercel/blob";

export const uploadFile = async (formData: FormData) => {
  const file = formData.get("file") as File;
  const filename = file.name;
  // creation du blob
  const blob = await put(filename, file, {
    access: "public",
  });

  return blob.url;
};
