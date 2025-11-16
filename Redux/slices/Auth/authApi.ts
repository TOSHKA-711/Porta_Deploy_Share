import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "./authSlice"; // Ensure the path is correct
import { UserType } from "@/Redux/Types";

export const authApi = createApi({
  reducerPath: "authApi",
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
    login: builder.mutation<{token:string,user:UserType}, { email: string; password: string }>({
      query: ({ email , password }) => ({
        url: "/user/login",
        method: "POST",
        body: { email, password },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled, getState }) {
        try {
          const { data } = await queryFulfilled;
          const { token, user } = data;
          console.log("Login successful:", data);

          if (typeof window !== "undefined") {
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
          }

          if (getState()) {
            dispatch(setUser({ user, token }));
          } else {
            console.warn("Store is not initialized yet");
          }
        } catch (error) {
          console.error("Login failed", error);
        }
      },
    }),
    gitHubLogin: builder.mutation<unknown, { code: string }>({
      query: ({ code }) => ({
        url: "/user/githubLogin",
        method: "POST",
        body: { code },
      }),
    }),
  }),
});

export const { useLoginMutation ,useGitHubLoginMutation} = authApi;
