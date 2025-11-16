import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./slices/Auth/authApi";
import { projectApi } from "./slices/Project/projectApi";
import { githubApi } from "./slices/github/githubApi";
import { vercelApi } from "./slices/vercel/vercelApi";
import { userApi } from "./slices/User/userApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
    [githubApi.reducerPath]: githubApi.reducer,
    [vercelApi.reducerPath]: vercelApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      projectApi.middleware,
      githubApi.middleware,
      vercelApi.middleware,
      userApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
