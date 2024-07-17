"use client";

import { updateLastId, updateNewId } from "@/actions/selectProject";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Project, ProjectRole } from "@prisma/client";
import { Session } from "next-auth";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { CardHome } from "../cardHome/CardHome";
import { Title } from "../title/Title";
import { Button } from "../ui/button";

interface Props {
  projects: Project[];
  firstProject: Project;
  secondProject: Project;
  thirdProject: Project;
  session: Session | null;
}

export const Projects: React.FC<Props> = ({
  session,
  projects,
  firstProject,
  secondProject,
  thirdProject,
}) => {
  const handleProjectOneChange = (selectedId: string) => {
    console.log("ID du projet sélectionné :", selectedId);
    updateLastId(firstProject.id);
    updateNewId(selectedId, ProjectRole.FIRST);
  };

  return (
    <div className="font-sans mt-4 mb-14">
      <Title title="My projects" />
      <div className="flex flex-col mt-[80px] md:grid md:grid-cols-2 xl:grid-cols-3">
        <div>
          <CardHome
            titleLink="See code"
            link={firstProject.link}
            title={firstProject.title}
            description={firstProject.litleDescription}
            tag="React/html/Scss"
            image={firstProject.descktopImage}
            alt={firstProject?.title}
          />
          {session?.user.role === "ADMIN" ? (
            <Select onValueChange={handleProjectOneChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                {projects.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : null}
        </div>
        <div>
          <CardHome
            titleLink="See code"
            link={secondProject.link}
            title={secondProject.title}
            description={secondProject.litleDescription}
            tag="html/Scss"
            image={secondProject.descktopImage}
            alt={secondProject.title}
          />
          {session?.user.role === "ADMIN" ? (
            <Select onValueChange={handleProjectOneChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                {projects.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : null}
        </div>
        <div>
          <CardHome
            titleLink="See code"
            link={thirdProject.link}
            title={thirdProject.title}
            description={thirdProject.litleDescription}
            tag="React/html/css"
            image={thirdProject.descktopImage}
            alt={thirdProject.title}
          />
          {session?.user.role === "ADMIN" ? (
            <Select onValueChange={handleProjectOneChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                {projects.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : null}
        </div>
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
