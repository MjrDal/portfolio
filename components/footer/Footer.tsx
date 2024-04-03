"use client";

import { Social } from "../social/Social";

export const Footer = () => {
  return (
    <header className="font-sans w-full flex  items-center relative box-border border-t-4 border-orange/[.25] py-6 sm:justify-center">
      <p className="text-white text-xl">Made by Julien DALLOZ</p>
      <div className=" absolute right-0 pr-4">
        <Social width="25px" />
      </div>
    </header>
  );
};
