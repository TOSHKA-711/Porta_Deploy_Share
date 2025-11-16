import React from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const GetInTouch = () => {
  const Data = [
    {
      name: "Email",
      detail: "aliovich711@gmail.com",
      buttonText: "Send Email",
      icon: <MdOutlineEmail className="text-4xl text-[#B7A7FD]" />,
    },
    {
      name: "LinkedIn",
      detail: "linkedin.com/in/yourprofile",
      buttonText: "Connect on LinkedIn",
      icon: <FaLinkedinIn className="text-4xl text-[#B7A7FD]" />,
    },
    {
      name: "GitHub",
      detail: "github.com/TOSHKA-711",
      buttonText: "Visit GitHub",
      icon: <FaGithub className="text-4xl text-[#B7A7FD]" />,
    },
    {
      name: "Whatsapp",
      detail: "+201021068752",
      buttonText: "Chat on WhatsApp",
      icon: <FaWhatsapp className="text-4xl text-[#B7A7FD]" />,
    },
  ];
  return (
    <div id="contact" className="FeaturedProjects flex flex-col gap-2 justify-center items-center text-center relative mt-20">
      <h1 className="z-10 text-[#B7A7FD] text-4xl font-bold ">Get In Touch</h1>
      <p className="z-10 text-gray-300 text-md mt-4 max-w-xl px-4">
        I&apos;m always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Here are the best ways to reach
        me..
      </p>
      <div className="cards flex gap-6 mt-12 w-4/5 justify-center flex-wrap px-4">
        {Data.map((item, index) => (
          <div
            key={index}
            className="card flex flex-1 flex-col items-center justify-center gap-3 border-2 border-gray-700 rounded-lg py-4 px-8 w-64 bg-[#0E0E17] hover:scale-105 hover:border-[#B7A7FD] transition cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] duration-500"
          >
            {item.icon}
            {item.name}
            <p className="text-gray-300 text-sm text-center">{item.detail}</p>
            <button className="text-black bg-[#B7A7FD] border-2 border-[#B7A7FD] py-2 px-5 rounded-md cursor-pointer flex :hover:bg-[#b7a7fdc2] hover:scale-105 hover:shadow-[0_0_10px_rgba(183,167,253,0.7)] transition duration-300 mt-2">
              {" "}
              {item.buttonText}{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetInTouch;
