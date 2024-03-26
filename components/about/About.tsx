"use client";
import Image from "next/image";
import { Title } from "../title/Title";

export const About = () => {
  return (
    <div className="font-sans mt-4">
      <Title title="About me" />
      <div className=" flex flex-row items-center pt-6 px-6">
        <p className="text-white text-xl">
          Passionate about digital creation and consistently interested in the
          latest technological advancements, I am a dedicated front-end
          developer. With an unwavering passion for web and application
          development, I diligently employ my skills to construct engaging user
          interfaces. Possessing a solid foundation in modern languages and
          frameworks, I am committed to delivering exceptional online
          experiences, blending aesthetics and functionality.
        </p>
        <Image
          src="/computer.svg"
          width={300}
          height={300}
          alt="Image computer"
        />
      </div>
    </div>
  );
};
