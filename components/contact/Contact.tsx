"use client";

export const Contact = () => {
  return (
    <div className="font-sans mt-4">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl  text-white pt-14">Contact</h2>
        <div className="w-full h-[15px] relative ">
          <div className="w-[15px] h-[15px] absolute bottom-1 right-0 rounded-full bg-orange"></div>
          <div className="w-[15px] h-[15px] absolute bottom-1 rounded-full bg-orange"></div>
          <div className=" w-60 h-1.5 mx-1 bg-orange"></div>
        </div>
        <p>I would be happy to answer you</p>
        <p>Send me a message</p>
      </div>
    </div>
  );
};
