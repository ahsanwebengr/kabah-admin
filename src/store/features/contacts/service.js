import api from "@/lib/api";
import config from "@/lib/endpoint";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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

const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`${config.admin.contacts}/${id}`);

      if (response.status === 200) {
        toast.success(response.data?.message || "Delete Contact Success");
      }

      return response?.data;
    } catch ({ message, response }) {
      toast.error(response?.data?.error || "Failed to Delete contact");
      return rejectWithValue(message);
    }
  },
);

const updateStatus = createAsyncThunk(
  "contact/updateStatus",
  async ({ id, status }, { rejectWithValue }) => {
        try {
      const response = await api.put(
        `${config.admin.contacts}/${id}`,
        { status },
        {
          headers: {
            "Content-Type": "Application/json",
          },
        },
      );
      if (response.status === 200) {
        toast.success(response?.data?.message || "Contact Update successfully");
      }
      return response?.data;
    } catch ({ message, response }) {
      toast.error(response?.data?.error || "Failed to Update Contact");
      return rejectWithValue(message);
    }
  },
);

const getReservations = createAsyncThunk(
  "contact/getReservations",
  async ({ page, limit } = {}, { rejectWithValue }) => {
    try {
      const response = await api.get(config.admin.orders, {
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

const getSingleReservation = createAsyncThunk(
  "contact/getSingleReservation",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`${config.admin.orders}/${id}`);

      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const deleteReservation = createAsyncThunk(
  "contact/deleteReservation",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`${config.admin.orders}/${id}`);

      if (response.status === 200) {
        toast.success(response.data?.message || "Delete Reservation Success");
      }

      return response?.data;
    } catch ({ message, response }) {
      toast.error(response?.data?.error || "Failed to Delete Reservation");
      return rejectWithValue(message);
    }
  },
);

export {
  getContacts,
  updateStatus,
  getSingleContacts,
  getReservations,
  getSingleReservation,
  deleteReservation,
  deleteContact,
};
