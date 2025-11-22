"use client";
import ProjectCard from "@/app/src/items/cards/ProjectCard";
import { useGetProjectsQuery } from "@/Redux/slices/Project/projectApi";
import { RootState } from "@/Redux/store";
import React from "react";
import { useSelector } from "react-redux";

const portfolio = () => {
  const data = useSelector((state: RootState) => state.user);
  const {
    data: projects,
    isLoading,
    isError,
  } = useGetProjectsQuery(data.data?.userId);

  if (isLoading) {
    return <div className="text-white text-lg">Loading...</div>;
  }

  if (isError) {
    return <div className="text-white text-lg">Error loading projects.</div>;
  }
  return (
    <div className="portfolio bg-[#11071F] pt-30 flex flex-col gap-2 justify-start items-center text-center relative min-h-screen animate-fadeIn">
      <h1 className="z-10  text-4xl font-bold ">
        My Professional Portfolio
      </h1>
      <p className="z-10 text-gray-300 text-md mt-4 max-w-xl px-4">
        A showcase of my web development, research, and creative work — built
        with passion, precision, and purpose.
      </p>
      <div className="cards grid grid-cols-3 gap-6 mt-12 w-4/5 px-4">
        {projects && projects.projects.length > 0 ? (
          projects.projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))
        ) : (
          <div className="text-white text-lg">No projects available.</div>
        )}
      </div>
    </div>
  );
};

export default portfolio;
