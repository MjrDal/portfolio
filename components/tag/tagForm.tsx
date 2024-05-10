"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AddTagSchema } from "@/schemas/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { tagAction } from "@/actions/tag";
import { FormError } from "@/components/messages/form-error";
import { FormSuccess } from "@/components/messages/form-success";
import { useState, useTransition } from "react";

export default function TagForm() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  // 1. Define your form.
  const form = useForm<z.infer<typeof AddTagSchema>>({
    resolver: zodResolver(AddTagSchema),
    defaultValues: {
      tag: "",
    },
  });

  // 2. Define a submit handler.

  const onSubmit = (values: z.infer<typeof AddTagSchema>) => {
    console.log(values);
    setError("");
    setSuccess("");
    startTransition(() => {
      tagAction(values).then((data) => {
        setError(data?.error);
        setSuccess(data.success);
        form.reset();
      });
    });
  };

  return (
    <div className="flex flex-col items-center p-6 box-border border-4 border-orange ">
      <h1>Add new tag</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" ">
          <div className=" flex flex-col justify-center items-center gap-[100px] mb-[100px] ">
            <FormField
              control={form.control}
              name="tag"
              render={({ field }) => (
                <FormItem className=" flex flex-col w-full sm:w-[600px] md:w-60">
                  <FormLabel className=" text-orange/[.5] text-base">
                    Tag *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Tag"
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
              Add tag
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
