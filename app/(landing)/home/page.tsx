import { auth } from "@/auth";
import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { Presentation } from "@/components/presentation/Presentation";
import { Projects } from "@/components/projects/Projects";
import { Separator } from "@/components/separator/Separator";
import { Skills } from "@/components/skills/Skills";
import { getProjectByNumber } from "@/data/home-project";
import { PrismaClient, ProjectRole } from "@prisma/client";

export default async function HomePage() {
  const prisma = new PrismaClient();
  const session = await auth();
  const projects = await prisma.project.findMany();

  // constante ou je place mes projet à afficher
  const firstProject = await getProjectByNumber(ProjectRole.FIRST);
  const secondProject = await getProjectByNumber(ProjectRole.SECOND);
  const thirdProject = await getProjectByNumber(ProjectRole.THIRD);

  // Controle que j'ai bien des projets
  if (!firstProject || !secondProject || !thirdProject) {
    return null;
  }

  return (
    <main className="flex flex-col w-full sm:items-center  px-2">
      <Presentation />
      <Separator />
      <About />
      <Separator />
      <Projects
        session={session}
        projects={projects}
        firstProject={firstProject}
        secondProject={secondProject}
        thirdProject={thirdProject}
      />
      <Separator />
      <Skills />
      <Contact />
    </main>
  );
}
