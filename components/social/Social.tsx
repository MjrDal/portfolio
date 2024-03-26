"use client";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

interface SocialProps {
  width: string;
}

export const Social = ({ width }: SocialProps) => {
  const iconStyle = {
    fontSize: width,
  };

  return (
    <div className="w-full flex flex-row gap-4">
      <FaGithub className=" text-white" style={iconStyle} />
      <CiTwitter className=" text-white" style={iconStyle} />
      <CiLinkedin className=" text-white" style={iconStyle} />
    </div>
  );
};
