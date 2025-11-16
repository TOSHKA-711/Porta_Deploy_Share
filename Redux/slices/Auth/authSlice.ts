import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../Types";

interface AuthState {
  user: UserType | null;
  token: string | null;
}
const getFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    try {
      return item ? JSON.parse(item) : null;
    } catch {
      return item; // If JSON parsing fails, return the raw string
    }
  }
  return null;
};


const initialState: AuthState = {
  token: getFromLocalStorage("token"),
  user: getFromLocalStorage("user"),

};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ user: UserType; token: string ;}>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;

      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
        
      }
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;