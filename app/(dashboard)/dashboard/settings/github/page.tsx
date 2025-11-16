"use client";

import { useState } from "react";
import { FaGithub, FaCheckCircle, FaTimesCircle, FaEye, FaEyeSlash } from "react-icons/fa";

export default function GithubSettingsPage() {
  const [connected, setConnected] = useState(true); // static now
  const [token, setToken] = useState("ghp_XXXXXXXXXXXXXXXXXXXXXX");
  const [showToken, setShowToken] = useState(false);

  return (
  <div className="mx-auto p-9 bg-[#141829] rounded-xl shadow-md text-white min-h-[93vh] ">
      <h1 className="text-3xl font-bold mb-8 text-[#B7A7FD] flex items-center gap-3">
        <FaGithub /> GitHub Settings
      </h1>

      <div className="bg-[#141829] p-8 rounded-xl shadow-md border border-[#2a314d] max-w-2xl">

        {/* GitHub Account Status */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Account Connection</h2>

          {connected ? (
            <span className="flex items-center gap-2 text-green-400">
              <FaCheckCircle /> Connected
            </span>
          ) : (
            <span className="flex items-center gap-2 text-red-400">
              <FaTimesCircle /> Not Connected
            </span>
          )}
        </div>

        {/* Static account info */}
        {connected && (
          <div className="mb-6">
            <p className="text-gray-300">
              <span className="font-semibold">GitHub Username:</span> TOSHKA-711
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">GitHub Profile:</span>{' '}
              <a
                href="https://github.com/TOSHKA-711"
                target="_blank"
                className="text-[#B7A7FD] hover:underline"
              >
                github.com/TOSHKA-711
              </a>
            </p>
          </div>
        )}

        {/* Token Input */}
        <div className="mb-6">
          <label className="block text-gray-400 mb-2">GitHub Token</label>
          <div className="flex items-center bg-[#1C2140] p-3 rounded-lg">
            <input
              type={showToken ? "text" : "password"}
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="flex-1 bg-transparent outline-none"
            />
            <button
              onClick={() => setShowToken(!showToken)}
              className="ml-3 text-gray-300 hover:text-white"
            >
              {showToken ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button className="mt-3 bg-[#B7A7FD] text-black px-4 py-2 rounded-md font-semibold hover:bg-[#a596fc]">
            Update Token
          </button>
        </div>

        {/* Connect / Disconnect Buttons */}
        <div className="flex justify-between mt-8">
          {connected ? (
            <button
              onClick={() => setConnected(false)}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md font-semibold"
            >
              Disconnect GitHub
            </button>
          ) : (
            <button
              onClick={() => setConnected(true)}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md font-semibold"
            >
              Connect GitHub
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
