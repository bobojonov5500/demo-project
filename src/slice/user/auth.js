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
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state) => {},
    loginUserFailure: (state) => {},
  },
});
export const { loginUserStart } = authSlice.actions;
export default authSlice.reducer;
