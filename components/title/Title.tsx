"use client";

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <div className="font-sans w-full flex flex-col items-center">
      <p className="text-9xl  text-white opacity-[.01]">Who am I</p>
      <h2 className="text-5xl  text-white absolute pt-14">{title}</h2>
    </div>
  );
};
