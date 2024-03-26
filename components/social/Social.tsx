"use client";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export const Presentation = () => {
  return (
    <div className=" w-full flex flex-row">
      <FaGithub />
      <CiTwitter />
      <CiLinkedin />
    </div>
  );
};
