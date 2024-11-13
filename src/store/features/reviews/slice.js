import { createSlice } from "@reduxjs/toolkit";
import {
  createReview,
  deleteReview,
  getAllTestimonials,
  getTestimonial,
  updateReview,
} from "./service";

const initialState = {
  testimonials: {
    data: {},
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  currentReview: {
    data: {},
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
};

export const reviewsSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTestimonials.pending, (state) => {
        state.testimonials.isLoading = true;
      })
      .addCase(getAllTestimonials.fulfilled, (state, action) => {
        state.testimonials.isLoading = false;
        state.testimonials.isSuccess = true;
        state.testimonials.data = action.payload;
      })
      .addCase(getAllTestimonials.rejected, (state, action) => {
        state.testimonials.isLoading = false;
        state.testimonials.isSuccess = false;
        state.testimonials.errorMessage = action.payload;
      })
      .addCase(createReview.pending, (state) => {
        state.testimonials.isLoading = true;
      })
      .addCase(createReview.fulfilled, (state, action) => {
        state.testimonials.isLoading = false;
        state.testimonials.isSuccess = true;
        state.testimonials.data = action.payload;
      })
      .addCase(createReview.rejected, (state, action) => {
        state.testimonials.isLoading = false;
        state.testimonials.isSuccess = false;
        state.testimonials.errorMessage = action.payload;
      })
      .addCase(updateReview.pending, (state) => {
        state.testimonials.isLoading = true;
      })
      .addCase(updateReview.fulfilled, (state, action) => {
        state.testimonials.isLoading = false;
        state.testimonials.isSuccess = true;
        state.testimonials.data = action.payload;
      })
      .addCase(updateReview.rejected, (state, action) => {
        state.testimonials.isLoading = false;
        state.testimonials.isSuccess = false;
        state.testimonials.errorMessage = action.payload;
      })
      .addCase(deleteReview.pending, (state) => {
        state.testimonials.isLoading = true;
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.testimonials.isLoading = false;
        state.testimonials.isSuccess = true;
        state.testimonials.data = action.payload;
      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.testimonials.isLoading = false;
        state.testimonials.isSuccess = false;
        state.testimonials.errorMessage = action.payload;
      })
      .addCase(getTestimonial.pending, (state) => {
        state.currentReview.isLoading = true;
      })
      .addCase(getTestimonial.fulfilled, (state, action) => {
        state.currentReview.isLoading = false;
        state.currentReview.isSuccess = true;
        state.currentReview.data = action.payload;
      })
      .addCase(getTestimonial.rejected, (state, action) => {
        state.currentReview.isLoading = false;
        state.currentReview.isSuccess = false;
        state.currentReview.errorMessage = action.payload;
      });
  },
});

export default reviewsSlice.reducer;
