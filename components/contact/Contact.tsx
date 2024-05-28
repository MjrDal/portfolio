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

  const onSubmit = async (values: z.infer<typeof ContactSchema>) => {
    const data = {
      email: values.email,
      userFirstname: values.name,
      message: values.message,
    };

    try {
      const response = await fetch("http://localhost:8090/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result) {
        setSuccess("email send!");
      } else {
        setError("email not send");
      }
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div id="Contact" className="font-sans w-full mt-4 mb-8">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl   mb-2 pt-14">Contact</h2>
        <div className=" h-[15px] relative mb-6 ">
          <div className="w-[15px] h-[15px] absolute bottom-1 right-0 rounded-full bg-orange"></div>
          <div className="w-[15px] h-[15px] absolute bottom-1 rounded-full bg-orange"></div>
          <div className=" w-60 h-1.5 mx-1 bg-orange"></div>
        </div>
        <p className=" text-xl mb-6">I would be happy to answer you</p>
        <p className=" text-4xl box-border border-4 border-orange rounded-tr-xl rounded-bl-xl mb-20 p-6">
          Send me a message
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" ">
          <div className=" flex flex-col justify-center items-center gap-[100px] mb-[100px] md:flex-row">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className=" flex flex-col w-full sm:w-[600px] md:w-60">
                  <FormLabel className=" text-orange/[.5] text-base">
                    Your name *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your name"
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
              name="email"
              render={({ field }) => (
                <FormItem className=" flex flex-col w-full sm:w-[600px] md:w-[450px]">
                  <FormLabel className=" text-orange/[.5] text-base">
                    Your email *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your email"
                      type="email"
                      className="  box-border border-b-4 border-orange/[.25] text-base text-white"
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
                <FormItem className=" flex flex-col w-full sm:w-[600px] md:w-[800px]">
                  <FormLabel className=" text-orange/[.5] text-base">
                    Your message *
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your message"
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
              Send message
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
