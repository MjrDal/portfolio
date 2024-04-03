"use client";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { CardHome } from "../cardHome/CardHome";
import { Title } from "../title/Title";
import { Button } from "../ui/button";

export const Projects = () => {
  return (
    <div className="font-sans mt-4 mb-14">
      <Title title="My projects" />
      <div className="flex flex-col mt-[80px]">
        <CardHome
          titleLink="See Kasa code"
          link="https://github.com/MjrDal/Kasa"
          title="Kasa"
          description="Creation of a real estate rental web application"
          tag="React/html/Scss"
          image="/kasa.PNG"
          alt="image du site Kasa"
        />
        <CardHome
          titleLink="See ohmyfood code"
          link="https://github.com/MjrDal/site-OhMyFood-Paris"
          title="Ohmyfood"
          description="Development of a website that lists the menus of gourmet restaurants"
          tag="html/Scss"
          image="/ohmyfood.PNG"
          alt="image du site ohmyfood"
        />
        <CardHome
          titleLink="See Sophie Bluel code"
          link="https://github.com/MjrDal/Portfolio-architecte-sophie-bluel-master"
          title="Sophie Bluel"
          description="Developing a portfolio for an interior designer"
          tag="React/html/css"
          image="/sophiebluel.PNG"
          alt="image du site sophie bluel"
        />
      </div>
      <div className="flex justify-end p-4">
        <Link href="/projects">
          <Button className="bg-orange text-white py-7">
            <p className="text-xl">All projects</p>
            <FaAngleRight className="text-5xl" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
