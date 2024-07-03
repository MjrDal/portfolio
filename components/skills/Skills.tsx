"use client";
import { Title } from "../title/Title";
import { WheelSkills } from "../wheelSkills/WheelSkills";

export const Skills = () => {
  return (
    <div id="Skills" className="font-sans mt-4 mb-14">
      <Title title="My skills" />
      <div className="flex flex-col items-center scale-75 md:scale-100 ">
        <div className=" flex flex-col sm:flex-row mb-4 gap-4 ">
          <WheelSkills
            image1="html-5.svg"
            alt1="logo html 5"
            image2="css-3.svg"
            alt2="logo css"
            image3="js-1.svg"
            alt3="logo javscript"
            image4="typescript.svg"
            alt4="logo typescrypt"
            title="Languages"
          />
          <WheelSkills
            image1="react.svg"
            alt1="logo react"
            image2="Vector.svg"
            alt2="logo vector"
            image3="/tailwind.PNG"
            alt3="logo tailwind"
            image4="/materialize.PNG"
            alt4="logo materialize"
            title="Framework"
          />
        </div>
        <div className="">
          <WheelSkills
            image1="/postgressql.PNG"
            alt1="logo postgressql"
            image2="/redux.PNG"
            alt2="logo redux"
            image3="/sass.PNG"
            alt3="logo sass"
            image4="/gihub.PNG"
            alt4="logo github"
            title="Other"
          />
        </div>
      </div>
    </div>
  );
};
