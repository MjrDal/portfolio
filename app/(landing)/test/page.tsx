/* eslint-disable @next/next/no-img-element */
"use client";

import { FormEventHandler, useState } from "react";
import { uploadFile } from "./upload.action";

export default function Page() {
  const [image, setimage] = useState<string | null>(null);
  // fonction pour submit le formulaire
  const handlSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // recuperation du fichier
    const file = formData.get("file") as File;

    const url = await uploadFile(formData);
    setimage(url);
  };

  return (
    <div>
      <h1>Upload images</h1>
      <form onSubmit={handlSubmit}>
        <input type="file" name="file" id="file" />
        <button type="submit">Upload</button>
      </form>
      {image ? (
        <img
          src={image}
          alt="Upload image"
          className=" w-32 h-32 object-cover"
        />
      ) : null}
    </div>
  );
}
