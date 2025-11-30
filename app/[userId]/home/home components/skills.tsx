"use client";
import { RootState } from "@/Redux/store";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const Skills = () => {
  const data = useSelector(
    (state: RootState) => state.user.data?.portfolio?.skills
  );

  const skills: Record<string, { name: string; icon: string }> = {
    HTML5: { name: "HTML5", icon: "/skills/html-5-svgrepo-com.svg" },
    CSS3: { name: "CSS3", icon: "/skills/css-3-svgrepo-com.svg" },
    JavaScript: {
      name: "JavaScript",
      icon: "/skills/javascript-svgrepo-com.svg",
    },
    TypeScript: {
      name: "TypeScript",
      icon: "/skills/typescript-svgrepo-com.svg",
    },
    React: { name: "React", icon: "/skills/reactjs-svgrepo-com.svg" },
    "Next.js": { name: "Next.js", icon: "/skills/nextjs-fill-svgrepo-com.svg" },
    Redux: { name: "Redux", icon: "/skills/redux-svgrepo-com.svg" },
    "Tailwind CSS": {
      name: "Tailwind CSS",
      icon: "/skills/tailwindcss-icon-svgrepo-com.svg",
    },
    Bootstrap: {
      name: "Bootstrap",
      icon: "/skills/bootstrap-fill-svgrepo-com.svg",
    },
    "Node.js": { name: "Node.js", icon: "/skills/nodejs-icon-svgrepo-com.svg" },
    Express: { name: "Express", icon: "/skills/express-svgrepo-com(1).svg" },
    MongoDB: { name: "MongoDB", icon: "/skills/mongodb-svgrepo-com.svg" },
    SQL: { name: "SQL", icon: "/skills/sql-database-generic-svgrepo-com.svg" },
    Sequelize: { name: "Sequelize", icon: "/skills/sequelize-svgrepo-com.svg" },
    Git: { name: "Git", icon: "/skills/git-svgrepo-com.svg" },
    GitHub: { name: "GitHub", icon: "/skills/github-142-svgrepo-com.svg" },
    Figma: { name: "Figma", icon: "/skills/figma-svgrepo-com.svg" },
  };

  return (
    <div className="Skills mt-20 flex flex-col gap-16 justify-center items-center text-center relative">
      <h1 className="z-10  text-5xl font-bold">My Skills</h1>

      <div className="grid grid-cols-2 sm:grid-cols-6 gap-6 w-full max-w-3xl mx-auto">
        {data &&
          data?.length > 0 &&
          data.map((skillName: string) => {
            const skill = skills[skillName];

            if (!skill) return null;

            return (
              <div
                key={skill.name}
                className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(168,158,252,0.7)]"
              >
                <div className="relative w-14 h-14 mb-2">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={56}
                    height={56}
                    loading="lazy"
                    decoding="async"
                    className="object-contain rounded-lg w-full h-full"
                    style={{ display: "block" }}
                  />
                </div>
                <span className="text-sm text-gray-300">{skill.name}</span>
              </div>
            );
          })}
      </div>

      <Image
        src={"/Group 1910 1.svg"}
        alt="universe"
        width={100}
        height={100}
        className="w-4xl -mt-55"
      />
    </div>
  );
};

export default Skills;
