// src/redux/store.ts
'use client'
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/authSlice'
// Example reducer


export const store = configureStore({
  reducer: {
    user: authReducer,
  },
});



