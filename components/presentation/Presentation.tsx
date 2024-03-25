"use client";

import Image from "next/image";
import { Dot } from "../dot/Dot";

export const Presentation = () => {
  const spec = "</>";
  return (
    <section className=" w-full flex flex-row justify-center items-center gap-8">
      <div className="w-[41.375rem] h-[20.625rem] bg-grayLight rounded-lg">
        <div className=" w-full h-11 bg-gray rounded-t-lg">
          <Dot />
        </div>
        <div className=" flex flex-row">
          <div className="pl-4 pt-4">
            <p className=" text-white text-5xl ">{spec}</p>
          </div>
          <div className="pl-4 pt-4">
            <h1 className=" text-white text-5xl"> Julien DALLOZ</h1>
            <p className=" text-white">Front-end developer</p>
            <p>
              The web is my playground, and every project is a new adventure to
              code.
            </p>
          </div>
          <div></div>
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
