"use server";
import { EmailTemplate } from "@/components/email/email-template";
import * as React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(name: string, email: string, message: string) {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: `${name}`,
      react: EmailTemplate({
        firstName: `${name}`,
        email: `${email}`,
        message: `${message}`,
      }) as React.ReactElement,
    });

    return data;
  } catch (error) {
    throw error;
  }
}
