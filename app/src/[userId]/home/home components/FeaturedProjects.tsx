"use client";
import React from "react";
import Image from "next/image";
import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import { useGetProjectsQuery } from "@/Redux/slices/Project/projectApi";
import { ProjectType } from "@/Redux/Types";

const FeaturedProjects = () => {
  const data = useSelector((state: RootState) => state.user);
  const {
    data: projects,
    isLoading,
    isError,
  } = useGetProjectsQuery(data.data?.userId);

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (isError) {
    return <div>Failed to find Featured projects</div>;
  }
  return (
    <div className="w-full flex flex-col items-center justify-center gap-20 pt-30">
      {projects?.projects &&
        projects.projects
          .filter((project: ProjectType) => project.isFeatured)
          .map((project: ProjectType, index: number) =>
            index == 0 || index % 2 == 0 ? (
              <div key={index} className="sec flex items-center gap-10">
                <div className="flex flex-col items-start">
                  <p className="text-purple-300 text-sm font-medium mb-2">
                    Featured Project
                  </p>
                  <h2 className="text-3xl font-bold text-[#CCD6F6] mb-6">
                    {project.name}
                  </h2>

                  <div className="whitespace-pre-wrap break-words min-h-30 -mr-20 text-white z-20 bg-white/10 backdrop-blur-xl p-6 px-10 rounded-xl w-[720px] shadow-lg border border-white/0">
                    {project.description || "No description yet"}
                  </div>
                </div>

                <div className="w-lg rounded-xl bg-red overflow-hidden shadow-xl border border-white/20">
                  <Image
                    src={project?.image?.secure_url ?? "/Screenshot.png"}
                    alt="Project Preview"
                    width={568}
                    height={354}
                    className="w-full h-90 object-fill"
                  />
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="sec flex flex-row-reverse items-center gap-10"
              >
                <div className="flex flex-col items-end">
                  <p className="text-purple-300 text-sm font-medium mb-2">
                    Featured Project
                  </p>
                  <h2 className="text-3xl font-bold text-[#CCD6F6] mb-6">
                    {project.name}
                  </h2>

                  <div className="whitespace-pre-wrap break-words min-h-30 -ml-20 text-white z-20 bg-white/10 backdrop-blur-xl p-6 px-10 rounded-xl w-[720px] shadow-lg border border-white/0">
                    {project.description || "No description yet"}
                  </div>
                </div>

                <div className="w-lg rounded-xl bg-red overflow-hidden shadow-xl border border-white/20">
                  <Image
                    src={project?.image?.secure_url ?? "/Screenshot.png"}
                    alt="Project Preview"
                    width={568}
                    height={354}
                    className="w-full h-90 object-fill"
                  />
                </div>
              </div>
            )
          )}
    </div>
  );
};

export default FeaturedProjects;
