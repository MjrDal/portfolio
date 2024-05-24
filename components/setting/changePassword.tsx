"use client";
import { FormSuccess } from "@/components/messages/form-success";
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
import { ChangePasswordSchema } from "@/schemas/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { changePassword } from "@/actions/changePassword";
import { FormError } from "@/components/messages/form-error";
import { useState, useTransition } from "react";

export default function ChangePassordForm() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  // 1. Define your form.
  const form = useForm<z.infer<typeof ChangePasswordSchema>>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      lastPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  // 2. Define a submit handler.

  const onSubmit = (values: z.infer<typeof ChangePasswordSchema>) => {
    setError("");
    setSuccess("");
    if (values.newPassword != values.confirmNewPassword) {
      setError("passwords are not the same");
    }

    startTransition(() => {
      changePassword(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <main className="flex flex-col items-center p-24 ">
      <div className=" flex flex-col items-center border-4 border-orange p-6 rounded-2xl">
        <h2>Change password</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" ">
            <div className=" flex flex-col justify-center items-center gap-[100px] mb-[100px] ">
              <FormField
                control={form.control}
                name="lastPassword"
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
                name="newPassword"
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
                name="confirmNewPassword"
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
              <FormSuccess message={success} />
              <Button
                disabled={isPending}
                type="submit"
                className="w-[280px] p-8 bg-orange text-white text-3xl"
              >
                Change password
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}
