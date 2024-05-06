"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Upload() {
  const [imageUrl, setImageUrl] = useState("/image/placeholder-image.jpg");
  const fileInputRef1 = useRef<HTMLInputElement>(null);
  const fileInputRef2 = useRef<HTMLInputElement>(null);

  // Fonction pour envoyer les images
  async function sendImage(formData: any) {
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        console.error("something went wrong1");
        return;
      }

      const data: { fileUrl: string } = await res.json();
      setImageUrl(data.fileUrl);
    } catch (error) {
      console.error("something went wrong");
    }
  }

  // Fonction pour submit les images
  const handleFormSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const fileInput1 = fileInputRef1.current;
    const fileInput2 = fileInputRef2.current;

    if (!fileInput1?.files) {
      console.warn("no file was chosen");
      return;
    }

    if (!fileInput2?.files) {
      console.warn("no file was chosen");
      return;
    }

    if (!fileInput1?.files || fileInput1.files.length === 0) {
      console.warn("file list is empty");
      return;
    }

    const file1 = fileInput1.files[0];
    const file2 = fileInput2.files[0];
    console.log(file1);
    console.log(file2);

    const formData1 = new FormData();
    formData1.append("file", file1);
    const formData2 = new FormData();
    formData2.append("file", file2);

    if (fileInput1?.files) {
      sendImage(formData1);
    }

    if (fileInput2?.files !== undefined) {
      sendImage(formData2);
    }

    // Réinitialise l'input file après l'envoi
    if (fileInput1) {
      fileInput1.value = "";
    }
    if (fileInput2) {
      fileInput2.value = "";
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
      <input type="file" ref={fileInputRef1} name="file" onChange={(e) => {}} />
      <input type="file" ref={fileInputRef2} name="file" onChange={(e) => {}} />
      <button type="submit">Upload</button>
    </form>
  );
}
