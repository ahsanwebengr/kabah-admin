import { createSlice } from "@reduxjs/toolkit";
import { createBlog, getBlogs, getSingleBlog, updateBlog } from "./service";

const initialState = {
  blogs: {
    data: null,
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  selectedBlog: {
    data: null,
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBlog.pending, (state) => {
        state.blogs.isLoading = true;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.blogs.isLoading = false;
        state.blogs.isSuccess = true;
        state.blogs.data = action.payload;
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.blogs.isLoading = false;
        state.blogs.isSuccess = false;
        state.blogs.errorMessage = action.payload;
      })
      .addCase(updateBlog.pending, (state) => {
        state.blogs.isLoading = true;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.blogs.isLoading = false;
        state.blogs.isSuccess = true;
        state.blogs.data = action.payload;
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.blogs.isLoading = false;
        state.blogs.isSuccess = false;
        state.blogs.errorMessage = action.payload;
      })
      .addCase(getBlogs.pending, (state) => {
        state.blogs.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.blogs.isLoading = false;
        state.blogs.isSuccess = true;
        state.blogs.data = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.blogs.isLoading = false;
        state.blogs.isSuccess = false;
        state.blogs.errorMessage = action.payload;
      })
      .addCase(getSingleBlog.pending, (state) => {
        state.selectedBlog.isLoading = true;
      })
      .addCase(getSingleBlog.fulfilled, (state, action) => {
        state.selectedBlog.isLoading = false;
        state.selectedBlog.isSuccess = true;
        state.selectedBlog.data = action.payload;
      })
      .addCase(getSingleBlog.rejected, (state, action) => {
        state.selectedBlog.isLoading = false;
        state.selectedBlog.isSuccess = false;
        state.selectedBlog.errorMessage = action.payload;
      });
  },
});

export default blogSlice.reducer;
