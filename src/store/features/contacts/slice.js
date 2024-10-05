import { createSlice } from "@reduxjs/toolkit";
import { getContacts, getSingleContacts } from "./service";

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
      .addCase(getSingleContacts.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(getSingleContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.isSuccess = true;
        state.selectedContact.data = action.payload;
      })
      .addCase(getSingleContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.isSuccess = false;
        state.contacts.errorMessage = action.payload;
      });
  },
});

export default contactSlice.reducer;
