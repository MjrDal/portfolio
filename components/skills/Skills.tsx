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
            image1="html-5.svg"
            image2="css-3.svg"
            image3="js-1.svg"
            image4="typescript.svg"
            title="Languages"
          />
          <WheelSkills
            image1="react.svg"
            image2="Vector.svg"
            image3="/tailwind.PNG"
            image4="/materialize.PNG"
            title="Framework"
          />
        </div>
        <div className="">
          <WheelSkills
            image1="/postgressql.PNG"
            image2="/redux.PNG"
            image3="/sass.PNG"
            image4="/gihub.PNG"
            title="Other"
          />
        </div>
      </div>
    </div>
  );
};
