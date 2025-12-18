import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://12834e69-2dfe-41bb-91bc-ddfceb785e7f-00-2qpnbka5hho05.riker.replit.dev/",
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

  tagTypes: ["User", "Portfolio"],

  endpoints: (builder) => ({
    getUser: builder.query({
      query: (userId: string) => `user/profile/${userId}`,
      providesTags: ["User"],
    }),

    getPortfolioData: builder.query({
      query: (userId: string) => `portfolio/getPortfolio/${userId}`,
      providesTags: ["Portfolio"],
    }),
  }),
});

export const { useGetUserQuery, useGetPortfolioDataQuery } = userApi;
