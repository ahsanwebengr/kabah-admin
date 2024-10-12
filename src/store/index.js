import { configureStore } from "@reduxjs/toolkit";
import packageSlice from "./features/packages/slice";
import mediaSlice from "./features/media/slice";
import paginationSlice from "./features/pagination/slice";
import contactSlice from "./features/contacts/slice";
import blogSlice from "./features/blogs/slice";
import statsSlice from "./features/stats/slice";

const store = configureStore({
  reducer: {
    package: packageSlice,
    pagination: paginationSlice,
    media: mediaSlice,
    contact: contactSlice,
    blog: blogSlice,
    stats: statsSlice,
  },
});

export default store;
