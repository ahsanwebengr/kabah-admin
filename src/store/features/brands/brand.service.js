import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { config } from '../../../utils/EndPoints';

const createBrands = createAsyncThunk(
  'brand/createBrands',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${config.baseUrl}/${config.endPoints.BRANDS}`,
        data
      );
      if (response.status === 200) {
        alert('Success');
      }
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getBrands = createAsyncThunk(
  'brand/getBrands',
  async ({ page, limit, name, type, active, featured } = {}, { rejectWithValue }) => {
    try {
      let url = `${config.baseUrl}/${config.endPoints.BRANDS}?`;
      if (page) url += `page=${page}&`;
      if (limit) url += `limit=${limit}&`;
      if (name) url += `name=${name}&`;
      if (active) url += `active=${active}&`;
      if (featured) url += `featured=${featured}&`;
      if (type) url += `type=${type}`;

      url = url.replace(/&$/, '');

      const response = await axios.get(url);

      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getSingleBrand = createAsyncThunk(
  'brand/getSingleBrand',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${config.baseUrl}/${config.endPoints.BRANDS}/${id}`
      );
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const deleteBrand = createAsyncThunk(
  'brand/deleteBrand',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${config.baseUrl}/${config.endPoints.BRANDS}/${id}`
      );
      if (response.status === 204) {
        alert('Success');
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const updateBrand = createAsyncThunk(
  'brand/updateBrand',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${config.baseUrl}/${config.endPoints.BRANDS}/${id}`,
        data
      );
      if (response.status === 200) {
        alert('Success');
      }
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { createBrands, getBrands, getSingleBrand, deleteBrand, updateBrand };
