import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { get } from "http";

export const userApi = createApi({
  reducerPath: "userApi",
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
    getUser: builder.query({
      query: () => `user/profile`,
    }),
    updateUser: builder.mutation({
      query: (userData) => ({
        url: `user/update`,
        method: "PUT",
        body: userData,
      }),
    }),
    getPortfolioData: builder.query({
      query: () => `portfolio/getPortfolio`,
    }),
    updatePortfolioData: builder.mutation({
      query: (portfolioData) => ({
        url: `portfolio/updatePortfolio`,
        method: "PUT",
        body: portfolioData,
      }),
    }),
  }),
});

export const {
  useUpdateUserMutation,
  useGetUserQuery,
  useGetPortfolioDataQuery,
  useUpdatePortfolioDataMutation,
} = userApi;
