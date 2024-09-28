import { createSlice } from "@reduxjs/toolkit";
import { updatePlanMedia } from "./service";

const initialState = {
  media: {
    data: null,
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
};

export const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updatePlanMedia.pending, (state) => {
        state.media.isLoading = true;
      })
      .addCase(updatePlanMedia.fulfilled, (state, action) => {
        state.media.isLoading = false;
        state.media.isSuccess = true;
        state.media.data = action.payload;
      })
      .addCase(updatePlanMedia.rejected, (state, action) => {
        state.media.isLoading = false;
        state.media.isSuccess = false;
        state.media.errorMessage = action.payload;
      });
  },
});

export default mediaSlice.reducer;
