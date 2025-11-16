import React from "react";

const Page = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#B7A7FD] mb-6">Overview</h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-[#1E2939] p-6 rounded-lg shadow hover:scale-[1.02] transition">
          <p className="text-gray-400">Total Projects</p>
          <h3 className="text-3xl font-bold text-white">8</h3>
        </div>
        <div className="bg-[#1E2939] p-6 rounded-lg shadow hover:scale-[1.02] transition">
          <p className="text-gray-400">Ongoing</p>
          <h3 className="text-3xl font-bold text-amber-400">3</h3>
        </div>
        <div className="bg-[#1E2939] p-6 rounded-lg shadow hover:scale-[1.02] transition">
          <p className="text-gray-400">Completed</p>
          <h3 className="text-3xl font-bold text-green-400">5</h3>
        </div>
      </div>
    </div>
  );
};

export default Page;
