"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Upload() {
  const [imageUrl, setImageUrl] = useState("/image/placeholder-image.jpg");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFormSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const fileInput = fileInputRef.current;

    if (!fileInput?.files) {
      console.warn("no file was chosen");
      return;
    }

    if (!fileInput?.files || fileInput.files.length === 0) {
      console.warn("file list is empty");
      return;
    }

    const file = fileInput.files[0];
    console.log(file);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        console.error("something went wrong");
        return;
      }

      const data: { fileUrl: string } = await res.json();
      setImageUrl(data.fileUrl);
    } catch (error) {
      console.error("something went wrong");
    }

    // Réinitialise l'input file après l'envoi
    if (fileInput) {
      fileInput.value = ""; // Efface le fichier sélectionné
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <Image
        src={imageUrl}
        alt="upload image"
        width={720}
        height={446}
        priority={true}
      />
      <input type="file" ref={fileInputRef} name="file" onChange={(e) => {}} />
      <button type="submit">Upload</button>
    </form>
  );
}
