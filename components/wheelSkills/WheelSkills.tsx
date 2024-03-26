"use client";

interface WheelSkillsProps {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
}

export const WheelSkills = ({
  image1,
  image2,
  image3,
  image4,
}: WheelSkillsProps) => {
  return (
    <div className="font-sans mt-4">
      <div className="w-[300px] h-[300px] flex justify-center items-center rounded-full bg-orange">
        <div className="w-[280px] h-[280px] rounded-full bg-black">
          <div className="w-[80px] h-[80px] rounded-full bg-grayLight"></div>
          <div className="w-[80px] h-[80px] rounded-full bg-grayLight"></div>
          <div className="w-[80px] h-[80px] rounded-full bg-grayLight"></div>
          <div className="w-[80px] h-[80px] rounded-full bg-grayLight"></div>
        </div>
      </div>
    </div>
  );
};
