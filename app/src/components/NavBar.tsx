import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="NavBar p-4 text-white flex justify-between items-center fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#0b0f19]/70 backdrop-blur-md">
      {/* Logo */}
      <div className="logo flex items-center gap-2 font-bold text-lg">
        <svg
          className="w-5 h-5 text-[#9d8df1]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        Portfolio.
      </div>

      {/* Links */}
      <div className="links flex gap-6 items-center justify-center">
        <Link
          className="hover:text-[#7c6ef1] duration-300 cursor-pointer hover:mx-1.5"
          href="/src/pages/home"
        >
          Home
        </Link>
        <Link
          className="hover:text-[#7c6ef1] duration-300 cursor-pointer hover:mx-1.5"
          href="/src/pages/about"
        >
          About
        </Link>
        <Link
          className="hover:text-[#7c6ef1] duration-300 cursor-pointer hover:mx-1.5"
          href="/src/pages/portfolio"
        >
          Projects
        </Link>
        <Link
          className="hover:text-[#7c6ef1] duration-300 cursor-pointer hover:mx-1.5"
          href="tel:+201021068752"
        >
          Contact
        </Link>
      </div>

      {/* Resume Button */}
      <Link href={"/dashboard"} className="bg-[#9d8df1] px-8 py-2 rounded-md hover:bg-[#7c6ef1] transition">
        Dashboard
      </Link>
    </div>
  );
};

export default NavBar;
