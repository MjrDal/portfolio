"use client";

import { DropDownMenu } from "../drop-down-menu/DropDownMenu";
import { NavBar } from "./Nav";

export const Header = () => {
  return (
    <header className="font-sans w-full flex justify-center items-center h-28">
      <NavBar />
      <DropDownMenu />
    </header>
  );
};
