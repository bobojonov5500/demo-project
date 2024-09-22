import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/user/auth";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
