import { configureStore } from "@reduxjs/toolkit";
import packageSlice from "./features/packages/slice";
import paginationSlice from "./features/pagination/slice";

const store = configureStore({
  reducer: {
    package: packageSlice,
    pagination: paginationSlice,
  },
});

export default store;
