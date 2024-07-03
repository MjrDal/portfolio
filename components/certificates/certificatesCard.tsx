"use client";

import Image from "next/image";

interface CertificatesCardProps {
  title: string;
  link: string;
  alt: string;
}

export const CertificatesCard: React.FC<CertificatesCardProps> = ({
  title,
  link,
  alt,
}) => {
  return (
    <div className=" flex flex-col items-center bg-gray rounded-xl p-2 m-1">
      <h2>{title}</h2>
      <div>
        <Image src={link} width={300} height={300} alt={alt} />
      </div>
    </div>
  );
};
