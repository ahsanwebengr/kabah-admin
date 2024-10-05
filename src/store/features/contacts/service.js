import api from "@/lib/api";
import config from "@/lib/endpoint";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getContacts = createAsyncThunk(
  "contact/getContacts",
  async ({ page, limit } = {}, { rejectWithValue }) => {
    try {
      const response = await api.get(config.admin.contacts, {
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

const getSingleContacts = createAsyncThunk(
  "contact/getSingleContacts",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`${config.admin.contacts}/${id}`);

      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export { getContacts, getSingleContacts };
