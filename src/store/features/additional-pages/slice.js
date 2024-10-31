import { createSlice } from "@reduxjs/toolkit";
import {
  createAdditionalPage,
  getAdditionalPages,
  getOnePage,
  updateAdditionalPage,
} from "./service";

const initialState = {
  additionalPages: {
    data: {},
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  selectedPage: {
    data: {},
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
};

export const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAdditionalPage.pending, (state) => {
        state.additionalPages.isLoading = true;
      })
      .addCase(createAdditionalPage.fulfilled, (state, action) => {
        state.additionalPages.isLoading = false;
        state.additionalPages.isSuccess = true;
        state.additionalPages.data = action.payload;
      })
      .addCase(createAdditionalPage.rejected, (state, action) => {
        state.additionalPages.isLoading = false;
        state.additionalPages.isSuccess = false;
        state.additionalPages.errorMessage = action.payload;
      })
      .addCase(updateAdditionalPage.pending, (state) => {
        state.additionalPages.isLoading = true;
      })
      .addCase(updateAdditionalPage.fulfilled, (state, action) => {
        state.additionalPages.isLoading = false;
        state.additionalPages.isSuccess = true;
        state.additionalPages.data = action.payload;
      })
      .addCase(updateAdditionalPage.rejected, (state, action) => {
        state.additionalPages.isLoading = false;
        state.additionalPages.isSuccess = false;
        state.additionalPages.errorMessage = action.payload;
      })
      .addCase(getAdditionalPages.pending, (state) => {
        state.additionalPages.isLoading = true;
      })
      .addCase(getAdditionalPages.fulfilled, (state, action) => {
        state.additionalPages.isLoading = false;
        state.additionalPages.isSuccess = true;
        state.additionalPages.data = action.payload;
      })
      .addCase(getAdditionalPages.rejected, (state, action) => {
        state.additionalPages.isLoading = false;
        state.additionalPages.isSuccess = false;
        state.additionalPages.errorMessage = action.payload;
      })
      .addCase(getOnePage.pending, (state) => {
        state.selectedPage.isLoading = true;
      })
      .addCase(getOnePage.fulfilled, (state, action) => {
        state.selectedPage.isLoading = false;
        state.selectedPage.isSuccess = true;
        state.selectedPage.data = action.payload;
      })
      .addCase(getOnePage.rejected, (state, action) => {
        state.selectedPage.isLoading = false;
        state.selectedPage.isSuccess = false;
        state.selectedPage.errorMessage = action.payload;
      });
  },
});

export default pagesSlice.reducer;
