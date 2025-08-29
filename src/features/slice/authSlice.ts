'use client'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  userData: string | null;
}

const initialState: AuthState = {
  userData: typeof window !== "undefined" && localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      if (action.payload) {
        localStorage.setItem("user", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("user");
      }
      state.userData = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
