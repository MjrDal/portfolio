"use client";

import { Social } from "@/components/social/Social";
import Image from "next/image";
import { Dot } from "../dot/Dot";

export const Presentation = () => {
  const spec = "</>";
  return (
    <section className="  w-full flex flex-row justify-center items-center gap-8 mb-[190px]">
      <div className="w-[41.375rem] h-[20.625rem] bg-grayLight rounded-lg">
        <div className=" w-full h-11 bg-gray rounded-t-lg">
          <Dot />
        </div>
        <div className=" flex flex-col h-[286px] place-content-between">
          <div className="flex flex-row pl-8 pt-6">
            <p className=" text-white text-5xl ">{spec}</p>
            <div className="font-sans ml-2 mr-[130px]">
              <h1 className=" text-white text-5xl"> Julien DALLOZ</h1>
              <p className=" text-white text-3xl">Front-end developer</p>
              <p className=" text-xl mt-2">
                The web is my playground, and every project is a new adventure
                to code.
              </p>
            </div>
          </div>

          <div className=" w-full pr-8 pb-5">
            <Social width="40px" />
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/image_build_website.svg"
          width={500}
          height={500}
          alt="Image web building"
        />
      </div>
    </section>
  );
};
