import { githubRepoType, ProjectType } from "@/Redux/Types";
import React from "react";
import MenuDots from "../MenuDots";


const RepoCard = ({
  repo,
  isDeployed,
  liveLink,
  refetch,
  isInPortfolio,
  portfolioProjectId
}: {
  repo: githubRepoType;
  portfolioProjectId:string;
  isDeployed: boolean;
  isInPortfolio: boolean;
  liveLink: string | null;
  refetch: () => void;
}) => {

  return (
    <div
      
      className="bg-[#1a1a1d] p-6 rounded-lg shadow-md hover:shadow-[0_0_10px_rgba(183,167,253,0.4)] transition duration-300 relative"
    >
      <div className="dots absolute right-5 top-3">
        <MenuDots
          repo={repo}
          liveLink={liveLink}
          refetch={refetch}
          isDeployed={isDeployed}
          isInPortfolio={isInPortfolio}
          portfolioProjectId={portfolioProjectId}
        />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-indigo-400">
        {repo.name}
      </h2>

      <p className="text-gray-400 text-sm mb-3">
        {repo.description || "No description provided"}
      </p>

      <p className="text-sm text-gray-500 mb-2">
        🧠 Language: {repo.language || "N/A"}
      </p>

      <p className="text-sm text-gray-500">
        ⏰ Updated: {new Date(repo.updated_at).toLocaleDateString()}
      </p>

      <div className="mt-3">
        {isDeployed ? (
          <span className="text-green-400">✅ Deployed on Vercel</span>
        ) : (
          <span className="text-gray-500">🚧 Not deployed</span>
        )}
      </div>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 w-fit text-indigo-500 hover:text-indigo-300 transition"
      >
        🔗 View on GitHub
      </a>
      {isDeployed && liveLink && (
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 w-fit text-green-400 hover:text-green-300 transition cursor-pointer"
        >
          🔗 Live Demo
        </a>
      )}
    </div>
  );
};

export default RepoCard;
