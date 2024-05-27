"use client";
import { Title } from "../title/Title";
import { WheelSkills } from "../wheelSkills/WheelSkills";

export const Skills = () => {
  return (
    <div id="Skills" className="font-sans mt-4">
      <Title title="My skills" />
      <div className="flex flex-col items-center scale-75 md:scale-100 ">
        <div className=" flex flex-col sm:flex-row mb-4 gap-4 ">
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
            image3="/tailwind.png"
            image4="/materialize.png"
            title="Framework"
          />
        </div>
        <div className="">
          <WheelSkills
            image1="/postgressql.png"
            image2="/redux.png"
            image3="/sass.png"
            image4="/gihub.png"
            title="Other"
          />
        </div>
      </div>
    </div>
  );
};
