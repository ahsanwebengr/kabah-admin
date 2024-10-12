import { createSlice } from "@reduxjs/toolkit";
import {
  deleteContact,
  deleteReservation,
  getContacts,
  getReservations,
  getSingleContacts,
  getSingleReservation,
  updateStatus,
} from "./service";

const initialState = {
  contacts: {
    data: null,
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  selectedContact: {
    data: null,
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  reservation: {
    data: null,
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
  currentReservation: {
    data: null,
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  },
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.isSuccess = true;
        state.contacts.data = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.isSuccess = false;
        state.contacts.errorMessage = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.isSuccess = true;
        state.contacts.data = action.payload;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.isSuccess = false;
        state.contacts.errorMessage = action.payload;
      })
      .addCase(updateStatus.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(updateStatus.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.isSuccess = true;
        state.contacts.data = action.payload;
      })
      .addCase(updateStatus.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.isSuccess = false;
        state.contacts.errorMessage = action.payload;
      })
      .addCase(getSingleContacts.pending, (state) => {
        state.selectedContact.isLoading = true;
      })
      .addCase(getSingleContacts.fulfilled, (state, action) => {
        state.selectedContact.isLoading = false;
        state.selectedContact.isSuccess = true;
        state.selectedContact.data = action.payload;
      })
      .addCase(getSingleContacts.rejected, (state, action) => {
        state.selectedContact.isLoading = false;
        state.selectedContact.isSuccess = false;
        state.selectedContact.errorMessage = action.payload;
      })
      .addCase(getReservations.pending, (state) => {
        state.reservation.isLoading = true;
      })
      .addCase(getReservations.fulfilled, (state, action) => {
        state.reservation.isLoading = false;
        state.reservation.isSuccess = true;
        state.reservation.data = action.payload;
      })
      .addCase(getReservations.rejected, (state, action) => {
        state.reservation.isLoading = false;
        state.reservation.isSuccess = false;
        state.reservation.errorMessage = action.payload;
      })
      .addCase(deleteReservation.pending, (state) => {
        state.reservation.isLoading = true;
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.reservation.isLoading = false;
        state.reservation.isSuccess = true;
        state.reservation.data = action.payload;
      })
      .addCase(deleteReservation.rejected, (state, action) => {
        state.reservation.isLoading = false;
        state.reservation.isSuccess = false;
        state.reservation.errorMessage = action.payload;
      })
      .addCase(getSingleReservation.pending, (state) => {
        state.currentReservation.isLoading = true;
      })
      .addCase(getSingleReservation.fulfilled, (state, action) => {
        state.currentReservation.isLoading = false;
        state.currentReservation.isSuccess = true;
        state.currentReservation.data = action.payload;
      })
      .addCase(getSingleReservation.rejected, (state, action) => {
        state.currentReservation.isLoading = false;
        state.currentReservation.isSuccess = false;
        state.currentReservation.errorMessage = action.payload;
      });
  },
});

export default contactSlice.reducer;
