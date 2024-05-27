import { PrismaClient } from "@prisma/client";

export const getProjectByNumber = async (number: any) => {
  const prisma = new PrismaClient();
  try {
    const Project = await prisma.project.findFirst({
      where: {
        project: number,
      },
      include: {
        tag: true,
      },
    });
    return Project;
  } catch {
    return null;
  }
};
