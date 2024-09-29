import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/user/auth";
import articleSlice from "../slice/user/articleslice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    article: articleSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
