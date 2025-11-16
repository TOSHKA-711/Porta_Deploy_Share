"use client";
import { useGetUserQuery } from "@/Redux/slices/User/userApi";
import { IUser } from "@/Redux/Types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { data: userData, isLoading, error } = useGetUserQuery(undefined);
  const [data, setData] = useState<IUser>();

  useEffect(() => {
    if (userData?.user) {
      setData(userData.user);
    }
  }, [userData]);

  console.log("User data from Redux API:", data, isLoading, error);

  if (error) {
    return <div className="text-red-500">Error loading user data.</div>;
  }

  if (isLoading) {
    return <div className="text-white min-h-[90vh]">Loading...</div>;
  }
  const projects = [
    {
      title: "Portfolio SaaS Platform",
      tech: "Next.js | TypeScript | Tailwind CSS | MongoDB | GitHub API | Vercel",
      desc: "A SaaS platform that lets users create and deploy their personal portfolios directly to GitHub and Vercel with integrated project management features.",
      features: [
        "Automatic GitHub project uploads",
        "Vercel deployment integration",
        "Customizable portfolio themes",
        "User authentication and dashboard",
      ],
      lamp: "amber",
    },
    {
      title: "Elfahem-edu Dashboard",
      tech: "Next.js | TypeScript | Redux Toolkit | RTK Query | Tailwind CSS | i18n",
      desc: "A responsive and multilingual dashboard for managing courses, departments, sessions, and student profiles in real-time.",
      features: [
        "Dynamic forms with conditional field updates",
        "Secure password update system",
        "Arabic and Hebrew language support",
      ],
      lamp: "green",
    },
    {
      title: "Attendance System",
      tech: "Next.js | JavaScript | Redux Toolkit | CSS | Material-UI (MUI)",
      desc: "A web-based attendance management system designed for efficient tracking of student or employee attendance.",
      features: [
        "QR code generation for attendance check-in",
        "Manual attendance entry support",
        "Responsive UI using Material-UI components",
      ],
      lamp: "green",
    },
    {
      title: "Yalla Dashboard",
      tech: "React.js | CSS | Framer Motion | Material-UI (MUI) | Axios | Context API",
      desc: "A real-time control panel for managing stadium reservations, including schedule and user control.",
      lamp: "green",
    },
    {
      title: "E-commerce Store",
      tech: "React.js | CSS | Framer Motion | Material-UI (MUI)",
      desc: "A fully functional e-commerce platform for smart devices with cart and product filtering.",
      lamp: "green",
    },
    {
      title: "Movies App",
      tech: "React.js | Sass | Redux.js | Framer Motion | Material-UI (MUI)",
      desc: "A movie discovery site using TMDB API to browse, filter, and favorite movies.",
      lamp: "green",
    },
    {
      title: "Task Manager App",
      tech: "Next.js | Tailwind CSS | Redux Toolkit | Swiper | Material-UI (MUI)",
      desc: "A modern to-do list app with interactive UI and smooth animations.",
      lamp: "green",
    },
    {
      title: "FOX Car Care",
      tech: "HTML | CSS | JavaScript | GSAP",
      desc: "A real-world website developed for FOX Company in Kuwait, offering car care services.",
      lamp: "green",
    },
  ];
  return (
    <div className="about  flex  justify-center items-center text-center min-h-screen pt-30">
      <div className="container  flex gap-6 justify-center items-start text-center animate-fadeIn ">
        {/* -------- Left Card -------- */}
        <div className="card flex-1 bg-[#0B0E1A] p-6 rounded-lg shadow-lg text-white flex flex-col items-center">
          <Image
            className=" object-cover border-2 border-[#B7A7FD]"
            src={"/myimg.jpeg"}
            width={100}
            height={20}
            alt="my image"
            style={{ borderRadius: "100%", width: "100px", height: "100px" }}
          />
          <h2 className="name text-2xl font-bold mt-4 text-[#B7A7FD]">
            {data?.name ?? ""}
          </h2>
          <p className="role text-lg text-gray-400">{data?.role ?? ""}</p>

          <span className="bio mt-4 text-gray-300 flex flex-col gap-0">
            <p>Computer Science Grad</p>
            <p>Passionate about coding and technology</p>
            <p>Loves to learn new things</p>
          </span>

          <div className="hashtags mt-4">
            <span className="hashtag text-blue-400 mr-2">#BoyCoder</span>
            <span className="hashtag text-blue-400 mr-2">
              #ExploreTheFuture
            </span>
          </div>

          <div className="w-4/5 h-0.5 bg-gray-700 my-4"></div>

          <div className="numbers flex justify-center gap-6">
            <div className="projects">
              <h3 className="text-xl font-semibold text-white">10+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>
            <div className="clients">
              <h3 className="text-xl font-semibold text-white">5+</h3>
              <p className="text-gray-400 text-sm">Clients</p>
            </div>
            <div className="experience">
              <h3 className="text-xl font-semibold text-white">2+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
          </div>

          <button className="contact-btn text-black bg-[#B7A7FD] border-2 border-[#B7A7FD] py-2 px-5 rounded-md cursor-pointer mt-5 hover:bg-[#b7a7fdc2] hover:scale-105 hover:shadow-[0_0_10px_rgba(183,167,253,0.7)] transition duration-300">
            Contact Me
          </button>
        </div>

        {/* -------- Right Section -------- */}
        <div className="details flex-3 flex flex-col gap-6 justify-start">
          {/* --- About Me --- */}
          {/* <div className="card flex-1 bg-[#0B0E1A] p-6 rounded-lg shadow-lg text-white flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-4 text-[#B7A7FD]">About Me</h2>
            <p className="text-gray-300 text-start leading-relaxed">
              Hi I&apos;m{" "}
              <span className="text-white font-bold">{data?.name}</span>, a{" "}
              <span className="text-blue-400 font-semibold">
                Full Stack MERN Developer
              </span>{" "}
              with strong expertise in{" "}
              <span className="text-cyan-400 font-semibold">React.js</span>,{" "}
              <span className="text-cyan-400 font-semibold">Next.js</span>, and{" "}
              <span className="text-green-400 font-semibold">MongoDB</span>.
              Recently, I expanded my skills to include{" "}
              <span className="text-yellow-400 font-semibold">Node.js</span> and{" "}
              <span className="text-yellow-400 font-semibold">Express.js</span>,
              building end-to-end applications with secure, scalable APIs.
              <br />I have proven experience creating{" "}
              <span className="text-green-400 font-semibold">
                responsive, user-friendly web applications
              </span>{" "}
              and delivering{" "}
              <span className="text-yellow-400 font-semibold">
                high-quality solutions
              </span>{" "}
              in both freelance and collaborative environments.
              <br />
              Strong{" "}
              <span className="text-orange-400 font-semibold">
                problem-solving skills
              </span>
              , a passion for{" "}
              <span className="text-pink-400 font-semibold">
                continuous learning
              </span>
              , and a growing interest in{" "}
              <span className="text-purple-400 font-semibold">
                backend architecture
              </span>{" "}
              and{" "}
              <span className="text-purple-400 font-semibold">
                API development
              </span>
              .
              <br />
              Experienced in{" "}
              <span className="text-teal-400 font-semibold">
                remote collaboration
              </span>{" "}
              and{" "}
              <span className="text-teal-400 font-semibold">
                international teamwork
              </span>
              , always aiming to improve performance and user experience through
              clean, maintainable code.
            </p>
          </div> */}
         <div className="card text-left flex-1 bg-[#0B0E1A] p-6 rounded-lg shadow-lg text-white flex flex-col items-start">{data?.bio} </div>

          {/* --- Projects Section --- */}
          <div className="card flex-1 bg-[#0B0E1A] p-6 rounded-lg shadow-lg text-white flex flex-col items-start gap-4">
            <div className="header flex w-full justify-between items-center">
              <h2 className="text-2xl font-bold text-[#B7A7FD]">Projects</h2>
              <div className="processes flex gap-6 items-center">
                <div className="flex items-center gap-2">
                  <span className="lamp w-3 h-3 bg-amber-400 rounded-full shadow-[0_0_10px_#fbbf24] animate-pulse"></span>
                  <span className="text-gray-300 text-sm">Ongoing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="lamp w-3 h-3 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80] animate-pulse"></span>
                  <span className="text-gray-300 text-sm">Completed</span>
                </div>
              </div>
            </div>

            <div className="projects grid grid-cols-2 w-full gap-4">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="project bg-[#1E2939] p-4 rounded-lg flex flex-col justify-start hover:scale-[1.02] hover:shadow-[0_0_12px_rgba(183,167,253,0.4)] transition duration-300"
                >
                  <div className="title mb-2 flex items-center gap-2">
                    <span
                      className={`lamp w-3 h-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.4)] animate-pulse ${
                        project.lamp === "amber"
                          ? "bg-amber-400"
                          : "bg-green-400"
                      }`}
                    ></span>
                    <span className="text-gray-300 font-semibold text-sm">
                      {project.title}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mb-1">{project.tech}</p>
                  <p className="text-gray-400 text-sm mb-2">{project.desc}</p>
                  {project.features && (
                    <ul className="list-disc list-inside text-gray-500 text-xs space-y-1">
                      {project.features.map((f, j) => (
                        <li key={j}>{f}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
