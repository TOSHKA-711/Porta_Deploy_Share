import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="Hero flex flex-col gap-5 justify-center items-center text-center relative"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0) 70%, #000 100%), url('/home-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "85vh",
        width: "100%",
      }}
    >
      <div className="layer h-full w-full bg-black/70 absolute top-0 left-0 "></div>
      <h1
        className="z-10 text-[#B7A7FD] text-6xl font-bold drop-shadow-[drop-shadow(0_0_15px_rgba(255,255,255,0.3))]"
        style={{
          filter: "drop-shadow(0 0 20px rgba(255,255,255,255.255))",
        }}
      >
        Ali El-den Mostafa
      </h1>
      <p className="z-10 text-gray-300 text-lg mt-4 max-w-xl px-4">
        Creative Web Developer and Innovator. Creating beautiful and functional
        digital experiences.
      </p>
      <div className="btns z-10 flex gap-4 mt-6">
        <button className="text-black bg-[#B7A7FD] border-2 border-[#B7A7FD] py-2 px-5 rounded-md cursor-pointer hover:bg-transparent hover:text-[#B7A7FD] transition">
          {" "}
          View My Work
        </button>
        <button className="text-[#B7A7FD]  border-2 border-[#B7A7FD] py-2 px-5 rounded-md cursor-pointer hover:bg-[#B7A7FD] hover:text-[#000] transition">
          {" "}
          Get in Touch
        </button>
      </div>
      <div className="icons z-10 flex gap-6 text-gray-300 text-2xl mt-6 justify-center">
        {[
          { icon: FaGithub, link: "https://github.com/TOSHKA-711" },
          { icon: FaLinkedinIn, link: "www.linkedin.com/in/ali-eldin-mostafa" },
          { icon: FaFacebookF, link: "https://facebook.com/ali.mostafa.626120" },
          { icon: FaWhatsapp, link: "https://wa.me/201032068752" },
        ].map(({ icon: Icon, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <Icon
              className="transition-all duration-300 cursor-pointer 
        group-hover:text-[#B7A7FD] group-hover:scale-110
        group-hover:drop-shadow-[0_0_10px_rgba(183,167,253,0.6)]"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;
