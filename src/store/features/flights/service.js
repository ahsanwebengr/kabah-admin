import api from "@/lib/api";
import config from "@/lib/endpoint";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const getFlights = createAsyncThunk(
  "flight/getFlights",
  async ({ page, limit } = {}, { rejectWithValue }) => {
    try {
      const response = await api.get(config.public.flights, {
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

const getSingleFlight = createAsyncThunk(
  "flight/getSingleFlight",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`${config.public.flights}/${id}`);

      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const deleteFlight = createAsyncThunk(
  "flight/deleteFlight",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`${config.admin.flights}/${id}`);

      if (response.status === 200) {
        toast.success(response.data?.message || "Delete Flight Success");
      }

      return response?.data;
    } catch ({ message, response }) {
      toast.error(response?.data?.error || "Failed to Delete Flight");
      return rejectWithValue(message);
    }
  },
);

const updateFlight = createAsyncThunk(
  "flight/updateFlight",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await api.put(`${config.admin.flights}/${id}`, data);
      if (response.status === 201) {
        toast.success(response?.data?.message || "Flight Update successfully");
      }
      return response?.data;
    } catch ({ message, response }) {
      toast.error(response?.data?.error || "Failed to Update Flight");
      return rejectWithValue(message);
    }
  },
);

const createFlight = createAsyncThunk(
  "flight/createFlight",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post(`${config.admin.flights}`, data);
      if (response.status === 201) {
        toast.success(response?.data?.message || "Flight create successfully");
      }
      return response?.data;
    } catch ({ message, response }) {
      toast.error(response?.data?.error || "Failed to create Flight");
      return rejectWithValue(message);
    }
  },
);

export {
  createFlight,
  getFlights,
  getSingleFlight,
  updateFlight,
  deleteFlight,
};
