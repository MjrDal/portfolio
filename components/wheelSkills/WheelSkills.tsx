"use client";
import Image from "next/image";

interface WheelSkillsProps {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  title: string;
}

export const WheelSkills = ({
  image1,
  image2,
  image3,
  image4,
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
        <Image src={image1} width={50} height={50} alt="Image computer" />
      </div>
      <div className="w-[80px] h-[80px] absolute left-0 rounded-full flex justify-center items-center bg-grayLight">
        <Image src={image2} width={50} height={50} alt="Image computer" />
      </div>
      <div className="w-[80px] h-[80px] absolute right-0 rounded-full flex justify-center items-center bg-grayLight">
        <Image src={image3} width={50} height={50} alt="Image computer" />
      </div>
      <div className="w-[80px] h-[80px] absolute top-0 rounded-full flex justify-center items-center bg-grayLight">
        <Image src={image4} width={50} height={50} alt="Image computer" />
      </div>
    </div>
  );
};
