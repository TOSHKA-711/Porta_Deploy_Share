import Image from "next/image";
import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: "/skills/html-5-svgrepo-com.svg" },
    { name: "CSS3", icon: "/skills/css-3-svgrepo-com.svg" },
    { name: "JavaScript", icon: "/skills/javascript-svgrepo-com.svg" },
    { name: "TypeScript", icon: "/skills/typescript-svgrepo-com.svg" },
    { name: "React", icon: "/skills/reactjs-svgrepo-com.svg" },
    { name: "Next.js", icon: "/skills/nextjs-fill-svgrepo-com.svg" },
    { name: "redux", icon: "/skills/redux-svgrepo-com.svg" },
    { name: "Tailwind CSS", icon: "/skills/tailwindcss-icon-svgrepo-com.svg" },
    { name: "Bootstrap", icon: "/skills/bootstrap-fill-svgrepo-com.svg" },
    { name: "Node.js", icon: "/skills/nodejs-icon-svgrepo-com.svg" },
    { name: "Express", icon: "/skills/express-svgrepo-com(1).svg" },
    { name: "MongoDB", icon: "/skills/mongodb-svgrepo-com.svg" },
    { name: "Sql", icon: "/skills/sql-database-generic-svgrepo-com.svg" },
    { name: "Sequelize", icon: "/skills/sequelize-svgrepo-com.svg" },
    { name: "Git", icon: "/skills/git-svgrepo-com.svg" },
    { name: "GitHub", icon: "/skills/github-142-svgrepo-com.svg" },
    { name: "Figma", icon: "/skills/figma-svgrepo-com.svg" },
  ];

  return (
    <div className="Skills flex flex-col gap-16 justify-center items-center text-center relative mt-20">
      <h1 className="z-10 text-[#B7A7FD] text-4xl font-bold ">My Skills</h1>

      <div className="grid grid-cols-2 sm:grid-cols-6 gap-6 w-full max-w-3xl mx-auto">
        {skills.map((skill) => (
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
        ))}
      </div>
    </div>
  );
};

export default Skills;
