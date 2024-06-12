import { auth } from "@/auth";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PrismaClient } from "@prisma/client";

export default async function ProjectsPage() {
  const prisma = new PrismaClient();
  const session = await auth();
  const tags = await prisma.tags.findMany();
  const project = await prisma.project.findMany({ include: { tag: true } });

  return (
    <main className="flex flex-col items-center ">
      <div className="flex flex-col items-center">
        <HoverEffect
          project={project}
          session={session}
          className=" text-white"
        />
      </div>
    </main>
  );
}
