import { createSlice } from "@reduxjs/toolkit";
import {
  createFlight,
  deleteFlight,
  getFlights,
  getSingleFlight,
  updateFlight,
} from "./service";

const initialState = {
  flights: {
    data: {},
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  selectedFlight: {
    data: null,
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
};

export const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFlights.pending, (state) => {
        state.flights.isLoading = true;
      })
      .addCase(getFlights.fulfilled, (state, action) => {
        state.flights.isLoading = false;
        state.flights.isSuccess = true;
        state.flights.data = action.payload;
      })
      .addCase(getFlights.rejected, (state, action) => {
        state.flights.isLoading = false;
        state.flights.isSuccess = false;
        state.flights.errorMessage = action.payload;
      })
      .addCase(getSingleFlight.pending, (state) => {
        state.selectedFlight.isLoading = true;
      })
      .addCase(getSingleFlight.fulfilled, (state, action) => {
        state.selectedFlight.isLoading = false;
        state.selectedFlight.isSuccess = true;
        state.selectedFlight.data = action.payload;
      })
      .addCase(getSingleFlight.rejected, (state, action) => {
        state.selectedFlight.isLoading = false;
        state.selectedFlight.isSuccess = false;
        state.selectedFlight.errorMessage = action.payload;
      })
      .addCase(deleteFlight.pending, (state) => {
        state.flights.isLoading = true;
      })
      .addCase(deleteFlight.fulfilled, (state, action) => {
        state.flights.isLoading = false;
        state.flights.isSuccess = true;
        state.flights.data = action.payload;
      })
      .addCase(deleteFlight.rejected, (state, action) => {
        state.flights.isLoading = false;
        state.flights.isSuccess = false;
        state.flights.errorMessage = action.payload;
      })
      .addCase(updateFlight.pending, (state) => {
        state.selectedFlight.isLoading = true;
      })
      .addCase(updateFlight.fulfilled, (state, action) => {
        state.selectedFlight.isLoading = false;
        state.selectedFlight.isSuccess = true;
        state.selectedFlight.data = action.payload;
      })
      .addCase(updateFlight.rejected, (state, action) => {
        state.selectedFlight.isLoading = false;
        state.selectedFlight.isSuccess = false;
        state.selectedFlight.errorMessage = action.payload;
      })
      .addCase(createFlight.pending, (state) => {
        state.flights.isLoading = true;
      })
      .addCase(createFlight.fulfilled, (state, action) => {
        state.flights.isLoading = false;
        state.flights.isSuccess = true;
        state.flights.data = action.payload;
      })
      .addCase(createFlight.rejected, (state, action) => {
        state.flights.isLoading = false;
        state.flights.isSuccess = false;
        state.flights.errorMessage = action.payload;
      });
  },
});

export default flightSlice.reducer;
