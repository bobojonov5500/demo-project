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
    postarticleStart: (state) => {
      state.isLoading = true;
    },
    postarticleSuccess: (state) => {
      state.isLoading = false;
    },
    postarticleFailure: (state) => {
      state.isLoading = false;
      state.error = "error";
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
  postarticleStart,
  postarticleSuccess,
  postarticleFailure,
} = articleSlice.actions;
export default articleSlice.reducer;
