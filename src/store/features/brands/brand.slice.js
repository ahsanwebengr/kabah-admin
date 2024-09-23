import { createSlice } from '@reduxjs/toolkit';
import {
  createBrands,
  deleteBrand,
  getBrands,
  getSingleBrand,
  updateBrand,
} from './brand.service';

const initialState = {
  brands: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: '',
  selectedBrand: [],
};

export const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createBrands.pending, state => {
        state.isLoading = true;
      })
      .addCase(createBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.brands = action.payload;
      })
      .addCase(createBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      .addCase(getBrands.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      .addCase(getSingleBrand.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSingleBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.selectedBrand = action.payload;
      })
      .addCase(getSingleBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      .addCase(deleteBrand.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.brands = action.payload;
      })
      .addCase(deleteBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      .addCase(updateBrand.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.brands = action.payload;
      })
      .addCase(updateBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      });
  },
});

export default brandSlice.reducer;
