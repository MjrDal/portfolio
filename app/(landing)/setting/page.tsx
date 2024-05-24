import { auth } from "@/auth";
import ChangePassordForm from "@/components/setting/changePassword";
import { TableUsers } from "@/components/setting/tableUser";
import { PrismaClient } from "@prisma/client";

export default async function HomePage() {
  const prisma = new PrismaClient();
  const session = await auth();

  return (
    <main className="flex flex-col w-full sm:items-center  px-2">
      <ChangePassordForm />
      {session?.user.role === "ADMIN" ? (
        <div>
          <TableUsers />
        </div>
      ) : null}
    </main>
  );
}
