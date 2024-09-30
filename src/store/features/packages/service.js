import api from "@/lib/api";
import config from "@/lib/endpoint";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const createPackage = createAsyncThunk(
  "package/createPackage",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post(`${config.admin.packages}`, data);
      if (response.status === 201) {
        toast.success(
          response?.data?.message || "Package created successfully",
        );
      }
      return response?.data;
    } catch (error) {
      toast.error("Failed to create Package");
      return rejectWithValue(error.message);
    }
  },
);

const getPackages = createAsyncThunk(
  "package/getPackages",
  async ({ page, limit, category } = {}, { rejectWithValue }) => {
    try {
      const response = await api.get(config.public.packages, {
        params: {
          page,
          limit,
          category,
        },
      });

      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const getSinglePackage = createAsyncThunk(
  "package/getSinglePackage",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`${config.public.packages}${id}`);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const deletePackage = createAsyncThunk(
  "package/deletePackage",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`${config.admin.packages}${id}`);
      if (response.status === 200) {
        toast.success(
          response?.data?.message || "Package deleted successfully",
        );
      }
      return response.data;
    } catch (error) {
      toast.error("Failed to delete package");
      return rejectWithValue(error.message);
    }
  },
);

const updatePackage = createAsyncThunk(
  "package/updatePackage",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await api.put(`${config.admin.packages}${id}`, data);
      if (response.status === 200) {
        toast.success(
          response?.data?.message || "Package Updated successfully",
        );
      }
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export {
  getPackages,
  deletePackage,
  createPackage,
  getSinglePackage,
  updatePackage,
};
