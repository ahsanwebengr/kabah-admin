import { createSlice } from "@reduxjs/toolkit";
import {
  createPackage,
  deletePackage,
  getPackages,
  getSinglePackage,
  updatePackage,
} from "./service";

const initialState = {
  packages: {
    data: null,
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  selectedPackage: {
    data: null,
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
};

export const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPackage.pending, (state) => {
        state.packages.isLoading = true;
      })
      .addCase(createPackage.fulfilled, (state, action) => {
        state.packages.isLoading = false;
        state.packages.isSuccess = true;
        state.packages.packages = action.payload;
      })
      .addCase(createPackage.rejected, (state, action) => {
        state.packages.isLoading = false;
        state.packages.isSuccess = false;
        state.packages.errorMessage = action.payload;
      })
      .addCase(getPackages.pending, (state) => {
        state.packages.isLoading = true;
      })
      .addCase(getPackages.fulfilled, (state, action) => {
        state.packages.isLoading = false;
        state.packages.isSuccess = true;
        state.packages.packages = action.payload;
      })
      .addCase(getPackages.rejected, (state, action) => {
        state.packages.isLoading = false;
        state.packages.isSuccess = false;
        state.packages.errorMessage = action.payload;
      })
      .addCase(deletePackage.pending, (state) => {
        state.packages.isLoading = true;
      })
      .addCase(deletePackage.fulfilled, (state, action) => {
        state.packages.isLoading = false;
        state.packages.isSuccess = true;
        state.packages.packages = action.payload;
      })
      .addCase(deletePackage.rejected, (state, action) => {
        state.packages.isLoading = false;
        state.packages.isSuccess = false;
        state.packages.errorMessage = action.payload;
      })
      .addCase(updatePackage.pending, (state) => {
        state.packages.isLoading = true;
      })
      .addCase(updatePackage.fulfilled, (state, action) => {
        state.packages.isLoading = false;
        state.packages.isSuccess = true;
        state.packages.packages = action.payload;
      })
      .addCase(updatePackage.rejected, (state, action) => {
        state.packages.isLoading = false;
        state.packages.isSuccess = false;
        state.packages.errorMessage = action.payload;
      })
      .addCase(getSinglePackage.pending, (state) => {
        state.selectedPackage.isLoading = true;
      })
      .addCase(getSinglePackage.fulfilled, (state, action) => {
        state.selectedPackage.isLoading = false;
        state.selectedPackage.isSuccess = true;
        state.selectedPackage.data = action.payload;
      })
      .addCase(getSinglePackage.rejected, (state, action) => {
        state.selectedPackage.isLoading = false;
        state.selectedPackage.isSuccess = false;
        state.selectedPackage.errorMessage = action.payload;
      });
  },
});

export default packageSlice.reducer;
