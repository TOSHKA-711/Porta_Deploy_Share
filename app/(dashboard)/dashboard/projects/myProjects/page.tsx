"use client";
import RepoCard from "@/app/src/items/cards/RepoCard";
import { useGetReposQuery } from "@/Redux/slices/github/githubApi";
import { useGetVercelDeploymentsQuery } from "@/Redux/slices/vercel/vercelApi";
import { VercelProjectType } from "@/Redux/Types";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

export default function ProjectsList() {

  const { data: GitHubRepos, isLoading: GitHubReposLoading ,refetch:reposRefetch} =
    useGetReposQuery();
  const { data: vercelRepos, isLoading: vercelLoading } =
    useGetVercelDeploymentsQuery();

  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  if (GitHubReposLoading || vercelLoading)
    return <div className="text-white">Loading...</div>;

  const projects = vercelRepos?.projects || [];

  // ✅ تقسيم الريبو حسب الصفحة
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedRepos = GitHubRepos?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(GitHubRepos.length / itemsPerPage);

  // console.log("verceeel", vercelRepos);
  console.log(GitHubRepos);
  console.log("verceeel",vercelRepos);
  

  return (
    <div className="min-h-screen  text-white px-4 ">
      <h1 className="text-3xl font-semibold mb-8 text-[#B7A7FD]">
        📁 My GitHub Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedRepos?.map((repo) => {
          const deployedProject = projects.find(
            (v: VercelProjectType) => v.link?.repoId === repo.id || v.name == repo.name
          );
          const isDeployed = Boolean(deployedProject);

          const liveLink = deployedProject?.latestDeployments?.[0]?.alias?.[0]
            ? `https://${deployedProject.latestDeployments[0].alias[0]}`
            : deployedProject?.latestDeployments?.[0]?.url
            ? `https://${deployedProject.latestDeployments[0].url}`
            : null;

          return (
            <RepoCard
              key={repo.id}
              repo={repo}
              liveLink={liveLink}
              isDeployed={isDeployed}
              refetch={reposRefetch}
            
            />
          );
        })}
      </div>
      {/* ✅ Pagination */}
      <div className="flex justify-center my-10 text-white">
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          color="primary"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white", 
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              color: "white",
              backgroundColor: "#B7A7FD", 
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
            },
          }}
        />
      </div>
    </div>
  );
}
