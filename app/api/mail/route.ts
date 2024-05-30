import WelcomeTemplate from "@/emails";
import { render } from "@react-email/render";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
  // rate limit
  // authorization

  const { email, userFirstname, message } = await request.json();

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["mjrdal.39@gmail.com"],
    subject: "Vous avez recut un message",
    html: render(WelcomeTemplate({ email, userFirstname, message })),
  });

  if (error) {
    return Response.json(error);
  }

  return Response.json({ message: "Email sent successfully" });
}
