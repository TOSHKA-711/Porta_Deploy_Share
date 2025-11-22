import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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

  tagTypes: ["User", "Portfolio"],

  endpoints: (builder) => ({
    userSignUp: builder.mutation({
      query: (data) => ({
        url: "user/signup",
        method: "POST",
        body: data,
      }),
    }),
    getUser: builder.query({
      query: (userId: string) => `user/profile/${userId}`,
      providesTags: ["User"],
    }),

    updateUser: builder.mutation({
      query: (userData) => ({
        url: `user/update`,
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),

    getPortfolioData: builder.query({
      query: (userId: string) => `portfolio/getPortfolio/${userId}`,
      providesTags: ["Portfolio"],
    }),

    updatePortfolioData: builder.mutation({
      query: (portfolioData) => ({
        url: `portfolio/updatePortfolio`,
        method: `PUT`,
        body: portfolioData,
      }),
      invalidatesTags: ["Portfolio"],
    }),
  }),
});

export const {
  useUserSignUpMutation,
  useUpdateUserMutation,
  useGetUserQuery,
  useGetPortfolioDataQuery,
  useUpdatePortfolioDataMutation,
} = userApi;
