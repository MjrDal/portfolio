"use client";

import { Title } from "../title/Title";
import { CertificatesCard } from "./certificatesCard";

export const Certificate = () => {
  return (
    <div id="certificates" className="font-sans mt-4 mb-14">
      <Title title="My Certificates" />
      <div className="flex flex-col mt-[80px] md:grid md:grid-cols-2 xl:grid-cols-3">
        <CertificatesCard
          title={"HTML 5 / CSS"}
          link={"/certificat-html5-CSS.PNG"}
          alt="certificate html5"
        />
        <CertificatesCard
          title={"Sass"}
          link={"/certificat-Sass.PNG"}
          alt="certificate Sass"
        />
        <CertificatesCard
          title={"Git & Github"}
          link={"/certificat-Git-Github.PNG"}
          alt="certificate Github"
        />
        <CertificatesCard
          title={"Javascript"}
          link={"/certificat-Javascript.PNG"}
          alt="certificate Javascript"
        />
        <CertificatesCard
          title={"React"}
          link={"/certificat-React.PNG"}
          alt="certificate React"
        />
        <CertificatesCard
          title={"Redux"}
          link={"/certificat-Redux.PNG"}
          alt="certificate Redux"
        />
      </div>
    </div>
  );
};
