import api from "@/lib/api";
import config from "@/lib/endpoint";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const getAdditionalPages = createAsyncThunk(
  "pages/getAdditionalPages",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.get(config.public.pages);

      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const getOnePage = createAsyncThunk(
  "pages/getOnePage",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`${config.public.pages}/${id}`);

      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const createAdditionalPage = createAsyncThunk(
  "pages/createAdditionalPage",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post(`${config.admin.pages}`, data);
      if (response.status === 201) {
        toast.success(response?.data?.message || "Page created successfully");
      }
      return response?.data;
    } catch ({ message, response }) {
      toast.error(response?.data?.error || "Failed to create Page");
      return rejectWithValue(message);
    }
  },
);

const updateAdditionalPage = createAsyncThunk(
  "pages/updateAdditionalPage",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await api.put(`${config.admin.pages}/${id}`, data);
      if (response.status === 200) {
        toast.success(response?.data?.message || "Page Update successfully");
      }
      return response?.data;
    } catch ({ message, response }) {
      toast.error(response?.data?.error || "Failed to Update Page");
      return rejectWithValue(message);
    }
  },
);

const deleteAdditionalPage = createAsyncThunk(
  "pages/deleteAdditionalPage",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`${config.admin.pages}/${id}`);
      if (response.status === 200) {
        toast.success(response?.data?.message || "Page Deleted successfully");
      }
      return response?.data;
    } catch ({ message, response }) {
      toast.error(response?.data?.error || "Failed to Delete Page");
      return rejectWithValue(message);
    }
  },
);

export {
  getAdditionalPages,
  getOnePage,
  createAdditionalPage,
  deleteAdditionalPage,
  updateAdditionalPage,
};
