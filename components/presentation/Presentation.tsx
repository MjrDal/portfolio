"use client";

import { Social } from "@/components/social/Social";
import Image from "next/image";
import { Dot } from "../dot/Dot";

export const Presentation = () => {
  const spec = "</>";
  return (
    <section className="flex flex-col md:flex-row gap-8 mt-[90px] mb-[190px]">
      <div className="max-w-[662px]  bg-grayLight rounded-lg">
        <div className=" h-11 bg-gray rounded-t-lg">
          <Dot />
        </div>
        <div className=" flex flex-col  place-content-between">
          <div className="flex flex-row pl-8 pt-6">
            <p className=" text-white text-5xl ">{spec}</p>
            <div className="font-sans ml-2 mr-[130px]">
              <h1 className=" text-white text-5xl"> Julien DALLOZ</h1>
              <p className=" text-white text-3xl">Front-end developer</p>
              <p className=" text-black text-xl mt-2">
                The web is my playground, and every project is a new adventure
                to code.
              </p>
            </div>
          </div>

          <div className=" w-full pr-8 pb-5">
            <Social color="text-white" width="40px" />
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
