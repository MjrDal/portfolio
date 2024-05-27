"use client";
import Link from "next/link";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

interface SocialProps {
  width: string;
  color: string;
}

export const Social = ({ width, color }: SocialProps) => {
  const iconStyle = {
    fontSize: width,
  };

  const iconColorClass = color;

  return (
    <div className="w-full flex flex-row-reverse gap-4">
      <Link href="https://github.com/MjrDal">
        <FaGithub className={` ${iconColorClass}`} style={iconStyle} />
      </Link>
      <Link href="https://twitter.com/JDInfo39">
        <CiTwitter
          className={`text-base ${iconColorClass}`}
          style={iconStyle}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/julien-undefined-a55b102a7/">
        <CiLinkedin
          className={`text-base ${iconColorClass}`}
          style={iconStyle}
        />
      </Link>
    </div>
  );
};
