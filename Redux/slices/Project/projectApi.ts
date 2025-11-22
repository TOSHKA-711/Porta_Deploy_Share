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
        url: "/addProject",
        method: "POST",
        body: data,
      }),
    }),
    getProjects: builder.query<{ msg: string; projects: ProjectType[] }, {userId:string}>({
      query: (userId) => ({
        url: `/getAllProjects/${userId}`,
        method: "GET",
      }),
    }),
    getProjectsById: builder.query<{project:ProjectType}, { projectId: string }>({
      query: ({ projectId }) => ({
        url: `/getProject/${projectId}`,
        method: "GET",
      }),
    }),
    updateProject: builder.mutation<unknown, { data: FormData; id: string }>(
      {
        query: ({ data, id }) => ({
          url: `/updateProject/${id}`,
          method: "PUT",
          body: data,
        }),
      }
    ),
    deleteProject: builder.mutation<unknown, { projectId: string }>({
      query: ({ projectId }) => ({
        url: `/deleteProject/${projectId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useUploadProjectMutation,
  useAddProjectMutation,
  useGetProjectsQuery,
  useGetProjectsByIdQuery,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} = projectApi;
