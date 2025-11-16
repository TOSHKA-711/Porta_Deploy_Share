"use client";
import { FaGithub } from "react-icons/fa";

export default function GitHubAuthPage() {
  const CLIENT_ID = "Ov23liq444IpqqOStB3O";
  const REDIRECT_URI = "http://localhost:3000/auth/callback";
  const handleGitHubAuth = () => {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=read:user,repo,delete_repo`;
    window.location.href = githubAuthUrl;
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0B0E1A] text-white">
      <div className="bg-[#1E2939] p-10 rounded-2xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-[#B7A7FD]">
          Connect Your GitHub
        </h1>
        <p className="text-gray-400 mb-8">
          To enable project uploads and deployment, please connect your GitHub
          account securely.
        </p>

        <button
          onClick={handleGitHubAuth}
          className="flex items-center justify-center gap-3 w-full bg-[#B7A7FD] text-black py-3 rounded-md text-lg font-semibold hover:bg-[#a896ff] hover:scale-105 transition-transform duration-300"
        >
          <FaGithub className="text-2xl" />
          Continue with GitHub
        </button>

        <p className="text-sm text-gray-500 mt-6">
          We’ll never post or access your repos without your permission.
        </p>
      </div>
    </div>
  );
}
