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
import { Textarea } from "@/components/ui/textarea";
import { ContactSchema } from "@/schemas/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { POST } from "@/app/api/send/route";
import { useState, useTransition } from "react";
import { FormError } from "../messages/form-error";
import { FormSuccess } from "../messages/form-success";

export const Contact = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  // 1. Define your form.
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.

  const onSubmit = (values: z.infer<typeof ContactSchema>) => {
    console.log(values);
    POST(values.name, values.email, values.message);
  };

  return (
    <div className="font-sans w-full mt-4">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl  text-white mb-2 pt-14">Contact</h2>
        <div className=" h-[15px] relative mb-6 ">
          <div className="w-[15px] h-[15px] absolute bottom-1 right-0 rounded-full bg-orange"></div>
          <div className="w-[15px] h-[15px] absolute bottom-1 rounded-full bg-orange"></div>
          <div className=" w-60 h-1.5 mx-1 bg-orange"></div>
        </div>
        <p className="text-white text-xl mb-6">
          I would be happy to answer you
        </p>
        <p className="text-white text-4xl box-border border-4 border-orange rounded-tr-xl rounded-bl-xl mb-20 p-6">
          Send me a message
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" ">
          <div className=" flex flex-row justify-center gap-[100px] mb-[100px]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className=" flex flex-col w-60">
                  <FormLabel className=" text-orange/[.5] text-base">
                    Your name *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your name"
                      type="text"
                      className=" bg-black box-border border-b-4 border-orange/[.25] text-base text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className=" flex flex-col w-[450px]">
                  <FormLabel className=" text-orange/[.5] text-base">
                    Your email *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your email"
                      type="email"
                      className=" bg-black box-border border-b-4 border-orange/[.25] text-base text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-center mb-[90px]">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className=" flex flex-col w-[800px]">
                  <FormLabel className=" text-orange/[.5] text-base">
                    Your message *
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your message"
                      className=" bg-black box-border border-b-4 border-orange/[.25] text-base text-white"
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
              Send message
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
