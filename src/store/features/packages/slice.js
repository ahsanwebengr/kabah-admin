import { createSlice } from "@reduxjs/toolkit";
import { createPackage, deletePackage, getPackages } from "./service";

const initialState = {
  packages: {
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
        state.isLoading = true;
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
        state.isLoading = true;
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
      });
  },
});

export default packageSlice.reducer;
