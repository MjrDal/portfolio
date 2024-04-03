"use client";

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <div className="font-sans w-full flex flex-col items-center">
      <p className="text-6xl  text-white opacity-[.01] sm:text-9xl">Who am I</p>
      <h2 className="text-2xl  text-white absolute pt-5 sm:text-5xl sm:pt-14">
        {title}
      </h2>
    </div>
  );
};
