"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaStar, FaCodeBranch, FaEye, FaLink } from "react-icons/fa";

export default function GitHubProjectDetails() {
  const { name } = useParams(); // اسم الريبو من URL
  const [repo, setRepo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const STATIC_REPO = {
    name: name,
    description: "This is a sample project description fetched from GitHub.",
    language: "JavaScript",
    stars: 12,
    forks: 4,
    watchers: 7,
    html_url: "https://github.com/TOSHKA-711/" + name,
    created_at: "2024-01-10",
    updated_at: "2024-03-04",
  };

  useEffect(() => {
    setRepo(STATIC_REPO);
    setLoading(false);
  }, [name]);

  if (loading) return <div className="text-white text-lg">Loading...</div>;

  return (
    <div className="text-white p-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4 text-[#B7A7FD]">
        📁 GitHub Project: {repo.name}
      </h1>

      {/* Card Container */}
      <div className="bg-[#141829] p-6 rounded-xl shadow-md border border-[#2a314d]">
        {/* Description */}
        <p className="text-gray-300 mb-6">{repo.description}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-[#1C2140] rounded-lg flex items-center gap-3">
            <FaStar className="text-yellow-400" />
            <div>
              <p className="text-sm text-gray-400">Stars</p>
              <p className="text-lg font-bold">{repo.stars}</p>
            </div>
          </div>

          <div className="p-4 bg-[#1C2140] rounded-lg flex items-center gap-3">
            <FaCodeBranch className="text-blue-400" />
            <div>
              <p className="text-sm text-gray-400">Forks</p>
              <p className="text-lg font-bold">{repo.forks}</p>
            </div>
          </div>

          <div className="p-4 bg-[#1C2140] rounded-lg flex items-center gap-3">
            <FaEye className="text-green-400" />
            <div>
              <p className="text-sm text-gray-400">Watchers</p>
              <p className="text-lg font-bold">{repo.watchers}</p>
            </div>
          </div>

          <div className="p-4 bg-[#1C2140] rounded-lg flex items-center gap-3">
            <span className="text-purple-400">💬</span>
            <div>
              <p className="text-sm text-gray-400">Language</p>
              <p className="text-lg font-bold">{repo.language}</p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-6">
          <a
            href={repo.html_url}
            target="_blank"
            className="bg-[#B7A7FD] text-black py-2 px-4 rounded-md font-semibold hover:bg-[#a696fc]"
          >
            <FaLink className="inline-block mr-2" />
            View on GitHub
          </a>
        </div>

        {/* Dates */}
        <div className="mt-8 text-gray-400 text-sm">
          <p>✅ Created: {repo.created_at}</p>
          <p>✅ Last Updated: {repo.updated_at}</p>
        </div>
      </div>
    </div>
  );
}
