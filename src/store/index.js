import { configureStore } from "@reduxjs/toolkit";
import packageSlice from "./features/packages/slice";
import mediaSlice from "./features/media/slice";
import paginationSlice from "./features/pagination/slice";
import contactSlice from "./features/contacts/slice";
import blogSlice from "./features/blogs/slice";
import statsSlice from "./features/stats/slice";
import flightSlice from "./features/flights/slice";
import pagesSlice from "./features/additional-pages/slice";
import reviewsSlice from "./features/reviews/slice";

const store = configureStore({
  reducer: {
    package: packageSlice,
    pagination: paginationSlice,
    media: mediaSlice,
    contact: contactSlice,
    blog: blogSlice,
    flight: flightSlice,
    stats: statsSlice,
    pages: pagesSlice,
    review: reviewsSlice,
  },
});

export default store;
