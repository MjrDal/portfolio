import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { $Enums } from "@prisma/client";
import Link from "next/link";
import { BiDetail } from "react-icons/bi";
import { DeletUserButton } from "../delete/deleteUserButton";
import { Button } from "../ui/button";

interface Props {
  users: {
    id: string;
    name: string | null;
    email: string;
    emailVerified: Date | null;
    password: string | null;
    role: $Enums.UserRole;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

export const TableUsers = ({ users }: Props) => {
  return (
    <div className="font-sans w-full flex flex-col items-center">
      <h2>Users table</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((docs) => (
            <TableRow key={docs.id}>
              <TableCell className="font-medium">{docs.id}</TableCell>
              <TableCell>{docs.email}</TableCell>
              <TableCell>{docs.role}</TableCell>
              <Button asChild>
                <Link href={`/setting/${docs.id}`}>
                  <BiDetail />
                </Link>
              </Button>
              <TableCell>
                <DeletUserButton dataId={docs.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
