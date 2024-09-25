import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  perPage: 12,
  totalItems: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
    },
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
    resetPagination: () => initialState,
  },
});

export const { setCurrentPage, setPerPage, setTotalItems, resetPagination } =
  paginationSlice.actions;
export default paginationSlice.reducer;
