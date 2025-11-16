import ProjectCard from "@/app/src/items/cards/ProjectCard";
import React from "react";

const portfolio = () => {
  return (
    <div className="portfolio flex flex-col gap-2 justify-center items-center text-center relative min-h-screen animate-fadeIn">
      <h1 className="z-10 text-[#B7A7FD] text-4xl font-bold ">
        My Professional Portfolio
      </h1>
      <p className="z-10 text-gray-300 text-md mt-4 max-w-xl px-4">
        A showcase of my web development, research, and creative work — built
        with passion, precision, and purpose.
      </p>
      <div className="cards flex gap-6 mt-12 w-4/5 justify-center flex-wrap px-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default portfolio;
