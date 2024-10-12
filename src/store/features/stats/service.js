import api from "@/lib/api";
import config from "@/lib/endpoint";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const getStats = createAsyncThunk(
  "stats/getStats",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.get(config.admin.stats);

      return response?.data;
    } catch ({ response, message }) {
      toast.error(response?.data?.error || "Failed to get stats");
      return rejectWithValue(message);
    }
  },
);

export { getStats };
