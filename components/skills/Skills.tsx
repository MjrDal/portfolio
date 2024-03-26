"use client";
import { Title } from "../title/Title";
import { WheelSkills } from "../wheelSkills/WheelSkills";

export const Skills = () => {
  return (
    <div className="font-sans mt-4">
      <Title title="My skills" />
      <div>
        <WheelSkills image1="" image2="" image3="" image4="" />
        <WheelSkills image1="" image2="" image3="" image4="" />
        <WheelSkills image1="" image2="" image3="" image4="" />
      </div>
    </div>
  );
};
