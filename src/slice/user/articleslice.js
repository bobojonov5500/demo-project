import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  article: null,
  articleDetails: null,
  error: null,
};
const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    articleStart: (state) => {
      state.isLoading = true;
    },
    articleSuccess: (state, action) => {
      state.isLoading = false;
      state.article = action.payload;
    },
    articleFailure: (state) => {
      state.isLoading = false;
    },
    articleDetailsStart: (state) => {
      state.isLoading = true;
    },
    articleDetailsSuccess: (state, action) => {
      state.isLoading = false;
      state.articleDetails = action.payload;
    },
    articleDetailsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  articleStart,
  articleSuccess,
  articleFailure,
  articleDetailsStart,
  articleDetailsSuccess,
  articleDetailsFailure,
} = articleSlice.actions;
export default articleSlice.reducer;
