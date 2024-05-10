"use client";
import { projectAction } from "@/actions/project";
import { AddProjectSchema } from "@/schemas";
import { useRouter } from "next/navigation";
import { useRef, useState, useTransition } from "react";
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
    <div className="flex flex-col items-center p-6 box-border border-4 border-orange ">
      <h1>Add new project</h1>
      <form
        ref={formRef}
        onSubmit={handleFormSubmit}
        className=" flex flex-col"
      >
        <label htmlFor="">Title *</label>
        <input type="text" ref={addInputs} name="title" id="title" />
        <label htmlFor="">Litle description *</label>
        <input
          type="text"
          ref={addInputs}
          name="litleDescription"
          id="description"
        />
        <label htmlFor="">Description *</label>
        <textarea
          name="description"
          ref={addInputs}
          id="bigDescrieption"
        ></textarea>
        <label htmlFor="">Link *</label>
        <input type="text" ref={addInputs} name="link" id="link" />
        <label htmlFor="">Tag *</label>
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
        <label htmlFor="">Descktop image *</label>
        <input
          type="file"
          ref={fileInputRef1}
          name="file"
          id="file"
          onChange={(e) => {}}
        />
        <label htmlFor="">mobile image</label>
        <input
          type="file"
          ref={fileInputRef2}
          name="file"
          id="file"
          onChange={(e) => {}}
        />
        <button type="submit">Add project</button>
      </form>
      {/* <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" ">
          <div className=" flex flex-col justify-center items-center gap-[100px] mb-[100px] ">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className=" flex flex-col w-full sm:w-[600px] md:w-60">
                  <FormLabel className=" text-orange/[.5] text-base">
                    Title *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your title"
                      type="text"
                      className="  box-border border-b-4 border-orange/[.25] text-base text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="litleDescription"
              render={({ field }) => (
                <FormItem className=" flex flex-col w-full sm:w-[600px] md:w-60">
                  <FormLabel className=" text-orange/[.5] text-base">
                    Description *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your description"
                      type="text"
                      className="  box-border border-b-4 border-orange/[.25] text-base text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-orange/[.5] text-base">
                    Description *
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your description"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="descktopImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image *</FormLabel>
                  <FormControl>
                    <Input
                      id="picture"
                      type="file"
                      ref={fileInputRef1}
                      onChange={(e) => {}}
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobileImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input
                      id="picture"
                      type="file"
                      ref={fileInputRef2}
                      onChange={(e) => {}}
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <ScrollArea className="h-28 w-48 rounded-md border">
              <FormField
                control={form.control}
                name="tag"
                render={() => (
                  <FormItem>
                    {tag.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="tag"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked: string) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {item.tag}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </ScrollArea>
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem className=" flex flex-col w-full sm:w-[600px] md:w-60">
                  <FormLabel className=" text-orange/[.5] text-base">
                    Link *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your description"
                      type="text"
                      className="  box-border border-b-4 border-orange/[.25] text-base text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col items-center">
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              disabled={isPending}
              type="submit"
              className="w-[280px] p-8 bg-orange text-white text-3xl"
            >
              Add project
            </Button>
          </div>
        </form>
      </Form> */}
    </div>
  );
};
