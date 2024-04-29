"use client";
import { projectAction } from "@/actions/project";
import { FormError } from "@/components/messages/form-error";
import { FormSuccess } from "@/components/messages/form-success";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { AddProjectSchema } from "@/schemas/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  tag: {
    id: string;
    tag: string;
  }[];
}

export const ProjectForm: React.FC<Props> = ({ tag }) => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  // 1. Define your form.
  const form = useForm<z.infer<typeof AddProjectSchema>>({
    resolver: zodResolver(AddProjectSchema),
    defaultValues: {
      title: "",
      litleDescription: "",
      description: "",
      descktopImage: "",
      mobileImage: "",
      tag: [],
      link: "",
    },
  });

  // 2. Define a submit handler.

  const onSubmit = (values: z.infer<typeof AddProjectSchema>) => {
    console.log(values);
    setError("");
    setSuccess("");
    startTransition(() => {
      projectAction(values).then((data) => {
        setError(data?.error);
        setSuccess(data.success);
        form.reset();
      });
    });
  };

  return (
    <div className="flex flex-col items-center p-24 box-border border-4 border-orange ">
      <h1>Add new project</h1>
      <Form {...form}>
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
      </Form>
    </div>
  );
};
