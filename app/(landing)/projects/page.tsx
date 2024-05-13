import { auth } from "@/auth";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PrismaClient } from "@prisma/client";

export default async function ProjectsPage() {
  const prisma = new PrismaClient();
  const session = await auth();
  const tags = await prisma.tags.findMany();
  const project = await prisma.project.findMany({ include: { tag: true } });

  return (
    <main className="flex flex-col items-center p-24 ">
      <div className="">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {tags.map((docs) => (
              <SelectItem key={docs.id} value={docs.tag}>
                {docs.tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="project" />
          </SelectTrigger>
          <SelectContent>
            {project.map((docs) => (
              <SelectItem key={docs.id} value={docs.id}>
                {docs.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect
          project={project}
          session={session}
          className=" text-white"
        />
      </div>
    </main>
  );
}
