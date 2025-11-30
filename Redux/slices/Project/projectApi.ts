import { ProjectType } from "@/Redux/Types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://porta-deploy-nodejs.vercel.app/project",
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
    getProjects: builder.query({
      query: (userId) => `/getAllProjects/${userId}`,
    }),
    getProjectsById: builder.query<
      { project: ProjectType },
      { projectId: string }
    >({
      query: ({ projectId }) => ({
        url: `/getProject/${projectId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProjectsQuery, useGetProjectsByIdQuery } = projectApi;
