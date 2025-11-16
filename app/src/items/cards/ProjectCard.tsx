import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = () => {
  return (
    <div className="card flex flex-1 flex-col items-center justify-center gap-3 border-2 border-gray-700 rounded-lg py-4 px-8 w-64 bg-[#0E0E17]hover:scale-105 hover:border-[#B7A7FD] transition cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] duration-500">
      <h1 className="text-[#B7A7FD] text-2xl font-bold ">
        Aly&apos;s Craft Web App
      </h1>
      <p className="text-gray-300 text-md">
        A web landing page that showcases Aly&apos;s Handmade Crafts.
      </p>
      <div className="image relative">
        <Image
          src={"/project_card.png"}
          width={400}
          height={50}
          className="object-cover w-full mt-2"
          alt="image"
        />
        <div className="layer absolute top-0 left-0 w-full h-full bg-black/30 opacity-0 hover:opacity-100 transition duration-300 justify-center items-center flex">
          <button className="text-black bg-[#B7A7FD] border-2 border-[#B7A7FD] py-2 px-5 rounded-md cursor-pointer  flex">
            {" "}
            View <MdArrowOutward />{" "}
          </button>
        </div>
      </div>
      <div className="tools">
        <h2 className="text-gray-400 text-sm mt-2">
          Tools: React, Tailwind CSS, Vercel
        </h2>
      </div>
    </div>
  );
};

export default ProjectCard;
