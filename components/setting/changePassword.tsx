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
import { RegisterSchema } from "@/schemas/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { register } from "@/actions/register";
import { FormError } from "@/components/messages/form-error";
import Link from "next/link";
import { useState, useTransition } from "react";

export default function ChangePassordForm() {
  const [error, setError] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  // 1. Define your form.
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    console.log(values);
    setError("");
    startTransition(() => {
      register(values).then((data) => {
        setError(data?.error);
      });
    });
  };

  return (
    <main className="flex flex-col items-center p-24 ">
      <div className=" flex flex-col items-center border-4 border-orange p-6 rounded-2xl">
        <h1>Register</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" ">
            <div className=" flex flex-col justify-center items-center gap-[100px] mb-[100px] ">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className=" flex flex-col w-full">
                    <FormLabel className=" text-orange/[.5] text-base">
                      Actually password *
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className=" flex flex-col w-full">
                    <FormLabel className=" text-orange/[.5] text-base">
                      New password *
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className=" flex flex-col w-full">
                    <FormLabel className=" text-orange/[.5] text-base">
                      Confirm new password *
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
              <Button
                disabled={isPending}
                type="submit"
                className="w-[280px] p-8 bg-orange text-white text-3xl"
              >
                Register
              </Button>
            </div>
          </form>
        </Form>
        <Link href="/login">Change</Link>
      </div>
    </main>
  );
}
