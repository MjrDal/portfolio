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
import { SignInSchema } from "@/schemas/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FormError } from "@/components/messages/form-error";
import { FormSuccess } from "@/components/messages/form-success";
import Link from "next/link";
import { useState, useTransition } from "react";

export default function LoginPage() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.

  const onSubmit = (values: z.infer<typeof SignInSchema>) => {
    console.log(values);
  };

  return (
    <main className="flex flex-col items-center p-24 ">
      <h1>Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" ">
          <div className=" flex flex-col justify-center items-center gap-[100px] mb-[100px] ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className=" flex flex-col w-full sm:w-[600px] md:w-60">
                  <FormLabel className=" text-orange/[.5] text-base">
                    email *
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className=" flex flex-col w-full sm:w-[600px] md:w-[450px]">
                  <FormLabel className=" text-orange/[.5] text-base">
                    Password *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your password"
                      type="password"
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
              Login
            </Button>
          </div>
        </form>
      </Form>
      <Link href="/register">Register</Link>
    </main>
  );
}
