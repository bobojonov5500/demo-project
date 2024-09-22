import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  LoggedIn: false,
  user: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Login
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state) => {
      state.LoggedIn = true;
      state.isLoading = false;
    },
    loginUserFailure: (state) => {},
    // Regsiter
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSuccess: (state) => {
      state.isLoading = false;
      state.LoggedIn = true;
    },
    registerUserFailure: (state) => {
      state.isLoading = false;
    },
  },
});
export const {
  loginUserStart,
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
  loginUserSuccess,
  loginUserFailure,
} = authSlice.actions;
export default authSlice.reducer;
