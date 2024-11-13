import api from "@/lib/api";
import config from "@/lib/endpoint";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const getAllTestimonials = createAsyncThunk(
  "review/getAllTestimonials",
  async ({ page, limit } = {}, { rejectWithValue }) => {
    try {
      const response = await api.get(`${config.public.testimonials}`, {
        params: {
          page,
          limit,
        },
      });
      return response?.data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const getTestimonial = createAsyncThunk(
  "review/getTestimonial",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`${config.public.testimonials}/${id}`);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const createReview = createAsyncThunk(
  "review/createReview",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post(`${config.admin.testimonials}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        toast.success(response?.data?.message || "Review created successfully");
      }
      return response?.data;
    } catch ({ message, response }) {
      toast.error(response?.data?.error || "Failed to create Review");
      return rejectWithValue(message);
    }
  },
);

const updateReview = createAsyncThunk(
  "review/updateReview",
  async ({ data, id }, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `${config.admin.testimonials}/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      if (response.status === 201) {
        toast.success(response?.data?.message || "Review Updated successfully");
      }
      return response?.data;
    } catch ({ message, response }) {
      toast.error(response?.data?.error || "Failed to Update Review");
      return rejectWithValue(message);
    }
  },
);

const deleteReview = createAsyncThunk(
  "review/deleteReview",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`admin/testimonial/${id}`);
      if (response.status === 200) {
        toast.success(response?.data?.message || "Review Deleted successfully");
      }
      return response?.data;
    } catch ({ message, response }) {
      toast.error(response?.data?.error || "Failed to Delete Review");
      return rejectWithValue(message);
    }
  },
);

export {
  getAllTestimonials,
  getTestimonial,
  createReview,
  deleteReview,
  updateReview,
};
