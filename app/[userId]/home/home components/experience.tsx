import Image from "next/image";
import Link from "next/link";
import React from "react";

const workItems = [
  {
    title: "CIB on the Mobile",
    desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    img: "/Group 2.svg",
    link: "#",
  },
  {
    title: "CIB on the Mobile		",
    desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    img: "/Group 1935.svg",
    link: "#",
  },
  {
    title: "CIB on the Mobile",
    desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    img: "/Group 1938.svg",
    link: "#",
  },
  {
    title: "CIB on the Mobile",
    desc: "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    img: "/Icons.svg",
    link: "#",
  },
];

const Experience = () => {
  return (
    <section className="text-white flex items-center justify-center py-20 pt-60 relative overflow-hidden -mt-20">
      <div
        className="absolute w-[650px] h-[650px] rounded-full bg-purple-700/40 blur-[60px]"
        style={{
          background:
            "radial-gradient(circle, rgba(118,60,172,0.9) 0%, rgba(118,60,172,0.3) 40%, rgba(0,0,0,0) 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      ></div>

      <div className="container -mt-20 relative z-10">
        <h2 className="text-5xl flex font-bold mb-14 text-center tracking-wide">
          Work Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {workItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-6 p-6 border border-white/10 rounded-xl
               bg-gradient-to-br from-[#130428] via-[#251043] to-[#38126D] shadow-xl
                hover:scale-[1.02] hover:shadow-purple-500/20 h-[200px] transition ease-in-out duration-300"
            >
              <Image
                width={100}
                height={100}
                src={item.img}
                alt="Work Logo"
                className="w-[150px]"
              />

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>

                <Link
                  href={item.link}
                  className="mt-2 text-purple-300 font-semibold   w-fit p-2"
                  style={{
                    border: "1px solid purple",
                    borderRadius: "10px",
                    fontSize: "10px",
                  }}
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
