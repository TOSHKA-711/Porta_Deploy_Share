// userSlice.js
import { IUser, Portfolio } from "@/Redux/Types";
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  data: {
    userData: IUser;
    portfolio: Portfolio;
    userId: string;
  } | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.data = action.payload;
    },
    clearUser(state) {
      state.data = null;
      localStorage.removeItem("persist:user");
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
