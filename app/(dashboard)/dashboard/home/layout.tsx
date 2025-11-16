"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FaHome,
  FaFolderOpen,
  FaCog,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex min-h-screen bg-[#0B0E1A] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#141829] p-6 flex flex-col justify-between shadow-lg h-screen sticky top-0">
        <div>
          <h1 className="text-xl font-bold mb-8 text-[#B7A7FD]">
            Ali Dashboard
          </h1>

          <nav className="flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-100px)]">
            {/* Overview */}
            <Link
              href="/dashboard/home"
              className={`flex items-center gap-3 p-2 rounded-md hover:bg-[#1C2140] transition ${
                isActive("/dashboard/home") ? "bg-[#1C2140]" : ""
              }`}
            >
              <FaHome /> Overview
            </Link>

            {/* Projects Dropdown */}
            <div>
              <button
                onClick={() => setIsProjectsOpen((prev) => !prev)}
                className={`w-full flex items-center justify-between p-2 rounded-md hover:bg-[#1C2140] transition ${
                  pathname.startsWith("/dashboard/projects")
                    ? "bg-[#1C2140]"
                    : ""
                }`}
              >
                <span className="flex items-center gap-3">
                  <FaFolderOpen /> Projects
                </span>
                {isProjectsOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {isProjectsOpen && (
                <div className="ml-8 mt-2 flex flex-col gap-2 text-sm">
                  <Link
                    href="/dashboard/projects/upload"
                    className={`p-2 rounded-md hover:bg-[#1C2140] transition ${
                      isActive("/dashboard/projects/upload")
                        ? "bg-[#1C2140]"
                        : ""
                    }`}
                  >
                    📤 Upload Projects
                  </Link>

                  <Link
                    href="/dashboard/projects/myProjects"
                    className={`p-2 rounded-md hover:bg-[#1C2140] transition ${
                      isActive("/dashboard/projects/myProjects")
                        ? "bg-[#1C2140]"
                        : ""
                    }`}
                  >
                    📁 My Projects
                  </Link>
                </div>
              )}
            </div>

            {/* Settings Dropdown */}
            <div>
              <button
                onClick={() => setIsSettingsOpen((prev) => !prev)}
                className={`w-full flex items-center justify-between p-2 rounded-md hover:bg-[#1C2140] transition ${
                  pathname.startsWith("/dashboard/settings")
                    ? "bg-[#1C2140]"
                    : ""
                }`}
              >
                <span className="flex items-center gap-3">
                  <FaCog /> Settings
                </span>
                {isSettingsOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {isSettingsOpen && (
                <div className="ml-8 mt-2 flex flex-col gap-2 text-sm">
                  <Link
                    href="/dashboard/settings/profile"
                    className={`p-2 rounded-md hover:bg-[#1C2140] transition ${
                      isActive("/dashboard/settings/profile")
                        ? "bg-[#1C2140]"
                        : ""
                    }`}
                  >
                    👤 Profile Settings
                  </Link>

                  <Link
                    href="/dashboard/settings/portfolio"
                    className={`p-2 rounded-md hover:bg-[#1C2140] transition ${
                      isActive("/dashboard/settings/portfolio")
                        ? "bg-[#1C2140]"
                        : ""
                    }`}
                  >
                    🎨 Portfolio Settings
                  </Link>

                  <Link
                    href="/dashboard/settings/vercel"
                    className={`p-2 rounded-md hover:bg-[#1C2140] transition ${
                      isActive("/dashboard/settings/vercel")
                        ? "bg-[#1C2140]"
                        : ""
                    }`}
                  >
                    ▲ Vercel Settings
                  </Link>

                  <Link
                    href="/dashboard/settings/github"
                    className={`p-2 rounded-md hover:bg-[#1C2140] transition ${
                      isActive("/dashboard/settings/github")
                        ? "bg-[#1C2140]"
                        : ""
                    }`}
                  >
                    🐱 GitHub Settings
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => router.push("/")}
          className="bg-[#B7A7FD] text-black font-semibold py-2 px-4 rounded-md hover:bg-[#a596fc] transition"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
