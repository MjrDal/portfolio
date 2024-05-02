"use client";

import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  files: string;
};

export default function Upload() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formData = new FormData();
    formData.append("files", data.files);
    console.log(data.files, "le consol log de data");

    await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="file" multiple={true} />
      <button>submit</button>
    </form>
  );
}
