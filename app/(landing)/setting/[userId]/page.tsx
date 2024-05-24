import { ModeButton } from "@/components/button/modeButton";
import { PageParams } from "@/components/types/next";
import { Button } from "@/components/ui/button";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const RoutePage = async (
  props: PageParams<{
    userId: string;
  }>
) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
    where: { id: props.params.userId },
  });

  if (!user) {
    return null;
  }

  return (
    <div className=" flex flex-col h-full gap-4 m-5">
      <Link href="/setting">
        <Button>Retour</Button>
      </Link>
      <span>{user?.id}</span>
      <span>{user?.email}</span>
      <ModeButton dataId={user.id} role={user.role} />
    </div>
  );
};

export default RoutePage;
