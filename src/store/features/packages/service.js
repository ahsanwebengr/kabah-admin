import api from "@/lib/api";
import config from "@/lib/endpoint";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const createBrands = createAsyncThunk(
//   'brand/createBrands',
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         `${config.baseUrl}/${config.endPoints.BRANDS}`,
//         data
//       );
//       if (response.status === 200) {
//         alert('Success');
//       }
//       return response?.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const getPackages = createAsyncThunk(
  "package/getPackages",
  async ({ page, limit } = {}, { rejectWithValue }) => {
    try {
      const response = await api.get(config.public.packages, {
        params: {
          page,
          limit,
        },
      });

      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// const getSingleBrand = createAsyncThunk(
//   'brand/getSingleBrand',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `${config.baseUrl}/${config.endPoints.BRANDS}/${id}`
//       );
//       return response?.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const deleteBrand = createAsyncThunk(
//   'brand/deleteBrand',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.delete(
//         `${config.baseUrl}/${config.endPoints.BRANDS}/${id}`
//       );
//       if (response.status === 204) {
//         alert('Success');
//       }
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const updateBrand = createAsyncThunk(
//   'brand/updateBrand',
//   async ({ id, data }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(
//         `${config.baseUrl}/${config.endPoints.BRANDS}/${id}`,
//         data
//       );
//       if (response.status === 200) {
//         alert('Success');
//       }
//       return response?.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export { getPackages };
