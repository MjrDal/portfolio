"use client";
import Image from "next/image";

interface WheelSkillsProps {
  image1: string;
  alt1: string;
  image2: string;
  alt2: string;
  image3: string;
  alt3: string;
  image4: string;
  alt4: string;
  title: string;
}

export const WheelSkills = ({
  image1,
  alt1,
  image2,
  alt2,
  image3,
  alt3,
  image4,
  alt4,
  title,
}: WheelSkillsProps) => {
  return (
    <div className="font-sans w-[380px] h-[380px] relative flex justify-center items-center rounded-full">
      <div className="w-[300px] h-[300px] flex justify-center items-center rounded-full bg-orange">
        <div className="w-[280px] h-[280px] flex justify-center items-center rounded-full bg-black text-white text-2xl">
          {title}
        </div>
      </div>
      <div className="w-[80px] h-[80px] absolute bottom-0 rounded-full flex justify-center items-center bg-grayLight">
        <Image src={image1} width={50} height={50} alt={alt1} />
      </div>
      <div className="w-[80px] h-[80px] absolute left-0 rounded-full flex justify-center items-center bg-grayLight">
        <Image src={image2} width={50} height={50} alt={alt2} />
      </div>
      <div className="w-[80px] h-[80px] absolute right-0 rounded-full flex justify-center items-center bg-grayLight">
        <Image src={image3} width={50} height={50} alt={alt3} />
      </div>
      <div className="w-[80px] h-[80px] absolute top-0 rounded-full flex justify-center items-center bg-grayLight">
        <Image src={image4} width={50} height={50} alt={alt4} />
      </div>
    </div>
  );
};
