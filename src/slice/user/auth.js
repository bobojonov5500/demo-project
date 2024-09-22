import { createSlice } from "@reduxjs/toolkit";

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
    },
    userSignFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {
  userSignStart,
  userSignSuccess,
  userSignFailure,
} = authSlice.actions;
export default authSlice.reducer;
