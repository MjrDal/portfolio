import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { Presentation } from "@/components/presentation/Presentation";
import { Projects } from "@/components/projects/Projects";
import { Separator } from "@/components/separator/Separator";
import { Skills } from "@/components/skills/Skills";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Presentation />
      <Separator />
      <About />
      <Separator />
      <Projects />
      <Separator />
      <Skills />
      <Contact />
    </main>
  );
}
