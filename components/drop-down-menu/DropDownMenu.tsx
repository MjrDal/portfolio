import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Session } from "next-auth";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { MenuTheme } from "./MenuTheme";

interface Props {
  session: Session | null;
}

export function DropDownMenu({ session }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="box-border border-2 border-orange  rounded-full"
        >
          <IoMenu className="text-orange text-2xl" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {session ? (
          <div>
            <div>{session.user.email}</div>
            <DropdownMenuSeparator />
            {session.user.role === "ADMIN" ? (
              <div>
                <Link href="/addProject">
                  <button>Ajouter un projet</button>
                </Link>
                <DropdownMenuSeparator />
              </div>
            ) : null}

            <div>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit">Log out</button>
              </form>
            </div>
            <DropdownMenuSeparator />
          </div>
        ) : (
          <div>
            <div className=" md:hidden">
              <Link href="/home">
                <button>Home</button>
              </Link>
              <DropdownMenuSeparator />
            </div>
            <div className=" md:hidden">
              <Link href="#About">
                <button>About me</button>
              </Link>
              <DropdownMenuSeparator />
            </div>
            <div className=" md:hidden">
              <Link href="/projects">
                <button>My project</button>
              </Link>
              <DropdownMenuSeparator />
            </div>
            <div className=" md:hidden">
              <Link href="#Skills">
                <button>My skills</button>
              </Link>
              <DropdownMenuSeparator />
            </div>
            <div className=" md:hidden">
              <Link href="#Contact">
                <button>Contact</button>
              </Link>
              <DropdownMenuSeparator />
            </div>
            <div>
              <Link href="/login">
                <button>Log In</button>
              </Link>
              <DropdownMenuSeparator />
            </div>
          </div>
        )}

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Mode</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <MenuTheme />
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
