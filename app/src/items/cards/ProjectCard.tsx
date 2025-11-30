import { ProjectType } from "@/Redux/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const truncateText = (text: string, maxLength: number) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  return (
    <div
      onClick={() => console.log(project)}
      className="card flex flex-1 flex-col items-center justify-center gap-3 rounded-lg py-4 px-8  bg-white/5 backdrop-blur-xl border border-white/10
 hover:scale-105 hover:border-[#7127BA] transition cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] duration-500"
    >
      <h1 className="text-[#7127BA] text-2xl font-bold">{project.name}</h1>

      <p className="text-gray-300 text-md whitespace-pre-wrap break-words">
        {project.description
          ? truncateText(project.description, 40)
          : "No description available."}
      </p>

      <div className="image relative w-full">
        <Image
          src={project?.image?.secure_url || "/portfolioImg.jpg"}
          width={400}
          height={250}
          className="object-cover w-full h-60 mt-2 rounded-lg"
          alt={project.name || "Project Image"}
        />

        <div className="layer absolute top-0 left-0 w-full h-full bg-black/30 opacity-0 hover:opacity-100 transition duration-300 justify-center items-center flex">
          <div className="btns flex gap-4">
            {project.githubUrl && (
              <Link
                target="_blank"
                href={project.githubUrl}
                className="text-black bg-[#7127BA] hover:bg-[#a38ffd] border-2 border-[#7127BA] py-2 px-5 rounded-md cursor-pointer flex items-center gap-2 transition ease-in-out duration-300"
              >
                Repo <MdArrowOutward />
              </Link>
            )}
            {project.isDeployed && project.vercelUrl && (
              <Link
                target="_blank"
                href={project.vercelUrl}
                className="text-black bg-[#7127BA] hover:bg-[#a38ffd] border-2 border-[#7127BA] py-2 px-5 rounded-md cursor-pointer flex items-center gap-2 transition ease-in-out duration-300"
              >
                Demo <MdArrowOutward />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="tools flex flex-wrap justify-center gap-2">
        {project.language ? (
          <h2 className="text-gray-400 text-sm mt-2">
            Tools: {project.language}
          </h2>
        ) : (
          <span className="text-gray-500 text-sm">No tools listed</span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
