"use client";

import { logout } from "@/actions/logout";
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
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MenuTheme } from "./MenuTheme";

interface Props {
  session: Session | null;
}

export function DropDownMenu({ session }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const logOut = () => {
    logout();
  };
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="box-border border-2 border-orange  rounded-full"
          onClick={handleToggle}
        >
          <IoMenu className="text-orange text-2xl" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {session ? (
          <div>
            <Link href="/setting">
              <div>{session.user.email}</div>
            </Link>
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
              <button type="submit" onClick={logOut}>
                Log out
              </button>
            </div>
            <DropdownMenuSeparator />
          </div>
        ) : (
          <div>
            <div className=" min-[1000px]:hidden">
              <Link href="/home">
                <button onClick={handleClose}>Home</button>
              </Link>
              <DropdownMenuSeparator />
            </div>
            <div className=" min-[1000px]:hidden">
              <Link href="/home#About" onClick={handleClose}>
                <button>About me</button>
              </Link>
              <DropdownMenuSeparator />
            </div>
            <div className=" min-[1000px]:hidden">
              <Link href="/projects" onClick={handleClose}>
                <button>My project</button>
              </Link>
              <DropdownMenuSeparator />
            </div>
            <div className=" min-[1000px]:hidden">
              <Link href="/home#Skills" onClick={handleClose}>
                <button>My skills</button>
              </Link>
              <DropdownMenuSeparator />
            </div>
            <div className=" min-[1000px]:hidden">
              <Link href="/home#certificates" onClick={handleClose}>
                <button>Certificates</button>
              </Link>
              <DropdownMenuSeparator />
            </div>
            <div className=" min-[1000px]:hidden">
              <Link href="/home#Contact" onClick={handleClose}>
                <button>Contact</button>
              </Link>
              <DropdownMenuSeparator />
            </div>
            <div>
              <Link href="/login" onClick={handleClose}>
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
