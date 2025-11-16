import ProjectCard from "@/app/src/items/cards/ProjectCard";
import React from "react";

const FeaturedProjects = () => {
  return (
    <div className="FeaturedProjects flex flex-col gap-2 justify-center items-center text-center relative -mt-20">
      <h1 className="z-10 text-[#B7A7FD] text-4xl font-bold ">
        Featured Projects
      </h1>
      <p className="z-10 text-gray-300 text-md mt-4 max-w-xl px-4">
        Here&apos;s a selection of my work. Check out all my projects for a
        deeper dive.
      </p>
      <div className="cards flex gap-6 mt-12 w-4/5 justify-center flex-wrap px-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default FeaturedProjects;
