import { configureStore } from "@reduxjs/toolkit";
import packageSlice from "./features/packages/slice";
import mediaSlice from "./features/media/slice";
import paginationSlice from "./features/pagination/slice";
import contactSlice from "./features/contacts/slice";

const store = configureStore({
  reducer: {
    package: packageSlice,
    pagination: paginationSlice,
    media: mediaSlice,
    contact: contactSlice,
  },
});

export default store;
