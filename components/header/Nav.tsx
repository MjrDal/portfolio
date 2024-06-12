"use client";

import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="  hidden min-[1000px]:flex">
      <ul className=" flex flex-row items-center px-10 box-border border-4 border-orange  rounded-full h-24 gap-10 text-2xl">
        <Link href="/home">
          <li>Home</li>
        </Link>
        <Link href="/home#About">
          <li>About me</li>
        </Link>
        <Link href="/projects">
          <li>My project</li>
        </Link>
        <Link href="/home#Skills">
          <li>My skills</li>
        </Link>
        <Link href="/home#certificates">
          <li>Certificates</li>
        </Link>
        <Link href="/home#Contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};
