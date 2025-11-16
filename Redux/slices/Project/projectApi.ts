import { ProjectType } from "@/Redux/Types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/project",
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
    uploadProject: builder.mutation<unknown, FormData>({
      query: (data) => ({
        url: "/uploadProject",
        method: "POST",
        body: data,
      }),
    }),
    addProject: builder.mutation<unknown, ProjectType>({
      query: (data) => ({
        url: "/project/addProject",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useUploadProjectMutation, useAddProjectMutation } = projectApi;
