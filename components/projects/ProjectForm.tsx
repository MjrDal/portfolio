"use client";
import { projectAction } from "@/actions/project";
import { AddProjectSchema } from "@/schemas";
import { useRouter } from "next/navigation";
import { useRef, useState, useTransition } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

interface Props {
  tag: {
    id: string;
    tag: string;
  }[];
}

export const ProjectForm: React.FC<Props> = ({ tag }) => {
  const [isPending, startTransition] = useTransition();
  const [imageUrl, setImageUrl] = useState("/image/placeholder-image.jpg");
  const [selectedThemes, setSelectedThemes] = useState([]);
  const fileInputRef1 = useRef<HTMLInputElement>(null);
  const fileInputRef2 = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // constant qui me permet d'initialiser useRef
  const formRef = useRef();
  // constant qui creer un tableau pour les entrées
  const inputs = useRef([]);
  // fonction qui permet de mettre toutes les entrée dans le tableau précédent
  const addInputs = (el: any) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const handleCheckboxChange = (theme: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedThemes([...selectedThemes, theme]);
    } else {
      setSelectedThemes(selectedThemes.filter((t) => t !== theme));
    }
  };

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
      console.error("something went wrong2");
    }
  }

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

    const formData = new FormData(formRef.current);
    const values = {
      title: formData.get("title") as string,
      litleDescription: formData.get("litleDescription") as string,
      description: formData.get("description") as string,
      descktopImage: fileInput1.files[0].name,
      mobileImage: file2 ? fileInput2.files[0].name : "null",
      link: formData.get("link") as string,
      tag: selectedThemes,
    };

    console.log(values);

    const validatedData = AddProjectSchema.parse(values);

    startTransition(() => {
      projectAction(validatedData).then((data) => {});
    });

    if (fileInput1?.files) {
      sendImage(formData1);
      router.push("/projects");
    }

    if (fileInput2?.files !== undefined) {
      sendImage(formData2);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 box-border border-4 border-orange rounded-2xl ">
      <h1>Add new project</h1>
      <form
        ref={formRef}
        onSubmit={handleFormSubmit}
        className=" flex flex-col"
      >
        <label className=" text-orange/[.5] text-base" htmlFor="">
          Title *
        </label>
        <input
          type="text"
          ref={addInputs}
          name="title"
          id="title"
          className="  box-border border-b-4 border-orange/[.25] text-base text-white"
        />
        <label className=" text-orange/[.5] text-base" htmlFor="">
          Litle description *
        </label>
        <input
          type="text"
          ref={addInputs}
          name="litleDescription"
          id="description"
          className="  box-border border-b-4 border-orange/[.25] text-base text-white"
        />
        <label className=" text-orange/[.5] text-base" htmlFor="">
          Description *
        </label>
        <textarea
          name="description"
          ref={addInputs}
          id="bigDescrieption"
          className="  box-border border-b-4 border-orange/[.25] text-base text-white"
        ></textarea>
        <label className=" text-orange/[.5] text-base" htmlFor="">
          Link *
        </label>
        <input
          type="text"
          ref={addInputs}
          name="link"
          id="link"
          className="  box-border border-b-4 border-orange/[.25] text-base text-white"
        />
        <label className=" text-orange/[.5] text-base" htmlFor="">
          Tag *
        </label>
        <ScrollArea className=" h-20 w-full rounded-md border">
          {tag.map((docs) => (
            <div key={docs.id}>
              <input
                type="checkbox"
                value={docs.id}
                name={docs.id}
                id={docs.id}
                onChange={(e) =>
                  handleCheckboxChange(docs.id, e.target.checked)
                }
              />
              <label htmlFor="">{docs.tag}</label>
            </div>
          ))}
        </ScrollArea>
        <label className=" text-orange/[.5] text-base" htmlFor="">
          Descktop image *
        </label>
        <input
          type="file"
          ref={fileInputRef1}
          name="file"
          id="file"
          onChange={(e) => {}}
        />
        <label className=" text-orange/[.5] text-base" htmlFor="">
          mobile image
        </label>
        <input
          type="file"
          ref={fileInputRef2}
          name="file"
          id="file"
          onChange={(e) => {}}
        />
        <Button
          type="submit"
          className="w-[280px] mt-4 p-8 bg-orange text-white text-3xl"
        >
          Add project
        </Button>
      </form>
    </div>
  );
};
