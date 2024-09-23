import { configureStore } from '@reduxjs/toolkit';
import brandSlice from './features/brands/brand.slice';

const store = configureStore({
  reducer: {
    brand: brandSlice,
  },
});

export default store;
