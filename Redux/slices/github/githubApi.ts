import { githubRepoType } from "@/Redux/Types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
  reducerPath: "githubApi",
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
    getRepos: builder.query<githubRepoType[], void>({
      query: () => "project/getGithubRepos",
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          console.error("Fetching github repos failed", error);
        }
      },
    }),
    deleteRepo: builder.mutation<unknown, { owner: string; repoName: string }>({
      query: ({ owner, repoName }) => ({
        url: `project/deleteGithubRepo`,
        method: "DELETE",
        body: { owner, repoName },
      }),
    }),
  }),
});

export const { useGetReposQuery, useDeleteRepoMutation } = githubApi;
