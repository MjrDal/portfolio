"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import items from "@/data/db.json";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CardContent, CardFooter, CardHeader } from "./card";

export const HoverEffect = ({ className }: { className?: string }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  let [idxNumber, setIdxNumber] = useState(0);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      <Dialog>
        {items.map((item, idx) => (
          <div
            key={item?.link}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setIdxNumber(idx)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-orange dark:bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <DialogTrigger asChild>
              <div>
                <Card className=" bg-gray m-0 p-0">
                  <CardHeader className=" m-0 p-0 h-[190px] overflow-hidden bg-orange">
                    <Image
                      src={item.image1}
                      width={400}
                      height={400}
                      alt={item.alt1}
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.lightDescription}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <p>Teck stack: </p>
                    <p>{item.tag.join(" / ")}</p>
                  </CardFooter>
                </Card>
              </div>
            </DialogTrigger>
          </div>
        ))}

        <DialogContent className=" flex flex-col justify-center items-center px-6 pb-14 pt-8 bg-black text-white">
          <DialogHeader className="flex flex-col items-center">
            <DialogTitle className="text-4xl">
              {items[idxNumber].title}
            </DialogTitle>
            <div className=" h-[15px] relative mb-6 ">
              <div className="w-[15px] h-[15px] absolute bottom-1 right-0 rounded-full bg-orange"></div>
              <div className="w-[15px] h-[15px] absolute bottom-1 rounded-full bg-orange"></div>
              <div className=" w-60 h-1.5 mx-1 bg-orange"></div>
            </div>
            <div className=" flex flex-row gap-4">
              {items[idxNumber].tag.map((item, index) => (
                <p
                  className=" bg-grayLight text-black w-10 text-center text-xs h-5 rounded-[10px]"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
          </DialogHeader>
          <div>
            <div className=" flex flex-row justify-center mt-2">
              <Image
                src={items[idxNumber].image1}
                width={400}
                height={296}
                alt={items[idxNumber].alt1}
                className="rounded-[10px]"
              />
              {items[idxNumber].image2 ? (
                <Image
                  src={items[idxNumber].image2}
                  width={400}
                  height={400}
                  alt={items[idxNumber].alt2}
                  className="rounded-[10px]"
                />
              ) : null}
            </div>
            <div className="mt-4">
              <p className="text-base">{items[idxNumber].largDescription}</p>
            </div>
          </div>
          <DialogFooter className="mt-11">
            <Link href="/">
              <Button className=" bg-orange text-white w-36 text-xl">
                View code{" "}
              </Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div>{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        " text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
