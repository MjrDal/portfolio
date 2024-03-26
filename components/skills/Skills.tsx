"use client";
import { Title } from "../title/Title";
import { WheelSkills } from "../wheelSkills/WheelSkills";

export const Skills = () => {
  return (
    <div className="font-sans mt-4">
      <Title title="My skills" />
      <div className="flex flex-row">
        <WheelSkills
          image1="/html-5.svg"
          image2="css-3.svg"
          image3="js-1.svg"
          image4="typescript.svg"
          title="Languages"
        />
        <WheelSkills
          image1="react.svg"
          image2="Vector.svg"
          image3=""
          image4=""
          title="Framework"
        />
        <WheelSkills image1="" image2="" image3="" image4="" title="Other" />
      </div>
    </div>
  );
};
