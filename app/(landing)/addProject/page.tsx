import { ProjectForm } from "@/components/projects/ProjectForm";
import TagForm from "@/components/tag/tagForm";
import { PrismaClient } from "@prisma/client";

const FormPage = async () => {
  const prisma = new PrismaClient();
  const tag = await prisma.tags.findMany();
  return (
    <main className="flex flex-row justify-between w-full px-64 py-20">
      <ProjectForm tag={tag} />
      <TagForm />
    </main>
  );
};
export default FormPage;
