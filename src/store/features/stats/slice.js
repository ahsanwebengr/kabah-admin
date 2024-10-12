import { createSlice } from "@reduxjs/toolkit";
import { getStats } from "./service";

const initialState = {
  stats: {
    data: null,
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
};

export const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStats.pending, (state) => {
        state.stats.isLoading = true;
      })
      .addCase(getStats.fulfilled, (state, action) => {
        state.stats.isLoading = false;
        state.stats.isSuccess = true;
        state.stats.data = action.payload;
      })
      .addCase(getStats.rejected, (state, action) => {
        state.stats.isLoading = false;
        state.stats.isSuccess = false;
        state.stats.errorMessage = action.payload;
      });
  },
});

export default statsSlice.reducer;
