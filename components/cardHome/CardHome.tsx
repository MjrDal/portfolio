/* eslint-disable @next/next/no-img-element */
"use client";
import { PinContainer } from "../ui/3d-pin";

interface CardHomeProps {
  titleLink: string;
  link: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  alt: string;
}

export function CardHome({
  titleLink,
  link,
  title,
  description,
  tag,
  image,
  alt,
}: CardHomeProps) {
  return (
    <div className=" flex  justify-center mb-14 ">
      <PinContainer title={titleLink} href={link}>
        <div className="flex  flex-col  w-[20rem] h-[20rem]">
          <div className=" p-3">
            <h3 className="font-bold text-2xl text-white">{title}</h3>
            <p className="text-base text-white ">{description}</p>
            <p className="text-xs text-white">Teck stack: {tag}</p>
          </div>
          <div>
            <img src={image} width={400} height={400} alt={alt} />
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
