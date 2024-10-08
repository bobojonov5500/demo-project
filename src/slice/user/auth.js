import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../../localstorage/saveToke";

const initialState = {
  isLoading: false,
  LoggedIn: false,
  user: null,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userSignStart: (state) => {
      state.isLoading = true;
    },
    userSignSuccess: (state, action) => {
      state.isLoading = false;
      state.LoggedIn = true;
      state.user = action.payload;
      setItem("token", action.payload.token);
    },
    userSignFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    userLogout: (state) => {
      state.LoggedIn = false;
      state.user = null;
    },
  },
});
export const {
  userSignStart,
  userSignSuccess,
  userSignFailure,
  userLogout,
} = authSlice.actions;
export default authSlice.reducer;
