"use client";

import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function ConnectVercelPage() {
  const [vercelToken, setVercelToken] = useState("");
  const [vercelTeamId, setVercelTeamId] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    if (!vercelToken) return alert("Please enter your Vercel Token first!");
    // هنا بعدين تبعت الـ token للـ backend عشان تخزنه
    setIsConnected(true);
  };

  const handleDisconnect = () => {
    setVercelToken("");
    setVercelTeamId("");
    setIsConnected(false);
  };

  return (
   <div className="mx-auto p-9 bg-[#141829] rounded-xl shadow-md text-white ">
      <h1 className="text-3xl font-semibold mb-6 text-[#B7A7FD]">
        🔗 Connect to Vercel
      </h1>

      <p className="text-gray-300 max-w-xl mb-8">
        Connect your Vercel account to deploy your GitHub projects, fetch
        deployment info, delete projects, and manage hosting automatically.
      </p>

      {/* Instructions */}
      {!isConnected && (
        <div className="bg-[#141829] p-5 rounded-xl shadow-lg border border-[#1C2140]  mb-6">
          <h2 className="text-xl font-semibold mb-3">
            How to get your Vercel Token
          </h2>
          <ol className="list-decimal ml-6 text-gray-300 space-y-2">
            <li>
              Go to{" "}
              <a
                href="https://vercel.com/account/tokens"
                target="_blank"
                className="text-[#B7A7FD] underline"
              >
                Vercel Tokens
              </a>
            </li>
            <li>Click "New Token" and give it a name.</li>
            <li>Copy the generated token.</li>
            <li>Paste it below and click "Connect Vercel".</li>
          </ol>
        </div>
      )}

      {/* Token Input */}
      {!isConnected && (
        <div className="bg-[#141829] p-5 rounded-xl shadow-lg border border-[#1C2140]  mb-6">
          <label className="block text-gray-400 mb-2">Vercel Token</label>
          <input
            type="text"
            value={vercelToken}
            onChange={(e) => setVercelToken(e.target.value)}
            className="w-full p-2 rounded bg-[#1C2140] border border-[#1C2140] text-white focus:outline-none focus:border-[#B7A7FD]"
            placeholder="Enter your Vercel Token"
          />

          <label className="block text-gray-400 mt-4 mb-2">
            Team ID (optional)
          </label>
          <input
            type="text"
            value={vercelTeamId}
            onChange={(e) => setVercelTeamId(e.target.value)}
            className="w-full p-2 rounded bg-[#1C2140] border border-[#1C2140] text-white focus:outline-none focus:border-[#B7A7FD]"
            placeholder="Enter Team ID if any"
          />

          <button
            onClick={handleConnect}
            className="mt-4 bg-[#B7A7FD] text-black px-6 py-3 rounded-md text-lg font-bold hover:bg-[#a796ff] transition"
          >
            Connect Vercel
          </button>
        </div>
      )}

      {/* Status Box */}
      <div className="bg-[#141829] p-5 rounded-xl shadow-lg border border-[#1C2140] max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Connection Status</h2>

          {isConnected ? (
            <span className="flex items-center gap-2 text-green-400">
              <FaCheckCircle /> Connected
            </span>
          ) : (
            <span className="flex items-center gap-2 text-red-400">
              <FaTimesCircle /> Not Connected
            </span>
          )}
        </div>

        {isConnected && (
          <div>
            <div className="mb-3">
              <p className="text-gray-400">Vercel Token:</p>
              <div className="bg-[#1C2140] p-2 rounded mt-1 break-all">
                {vercelToken}
              </div>
            </div>

            {vercelTeamId && (
              <div className="mb-4">
                <p className="text-gray-400">Team ID:</p>
                <div className="bg-[#1C2140] p-2 rounded mt-1">
                  {vercelTeamId}
                </div>
              </div>
            )}

            <button
              onClick={handleDisconnect}
              className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-md font-semibold"
            >
              Disconnect
            </button>
          </div>
        )}
      </div>

      {/* Why Connect */}
      <div className="mt-12 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Why Connect Vercel?</h2>
        <ul className="list-disc ml-6 text-gray-300 space-y-2">
          <li>Deploy GitHub projects with one click</li>
          <li>Automatically generate live URLs</li>
          <li>Delete or update deployments from your dashboard</li>
          <li>Track build logs and deployment status</li>
        </ul>
      </div>
    </div>
  );
}
