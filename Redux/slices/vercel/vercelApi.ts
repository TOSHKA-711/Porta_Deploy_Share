import { vercelProjectsResponseType } from "@/Redux/Types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vercelApi = createApi({
  reducerPath: "vercelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",

    prepareHeaders: (headers) => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    //  GET Projects
    getVercelDeployments: builder.query<vercelProjectsResponseType, void>({
      query: () => "project/getVercelDeployments",
    }),

    // import Github Repo to vercel
    importGithubRepo: builder.mutation<
      unknown,
      {
        name: string;
        repoId: number;
      }
    >({
      query: ({ name, repoId }) => ({
        url: `project/importProjectToVercel`,
        method: "POST",
        body: {
          name,
          repoId,
        },
      }),
    }),

    //  Deploy GitHub Repo → v13
    deployGithubRepo: builder.mutation<
      unknown,
      {
        name: string;
        owner: string;
        repoName: string;
        branch: string;
        repoId: number;
      }
    >({
      query: ({ repoName, branch, repoId }) => ({
        url: `project/deployProject`,
        method: "POST",
        body: {
          repoName,
          branch,
          repoId,
        },
      }),
    }),
  }),
});

export const {
  useGetVercelDeploymentsQuery,
  useImportGithubRepoMutation,
  useDeployGithubRepoMutation,
} = vercelApi;
