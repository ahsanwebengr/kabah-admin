import api from "@/lib/api";
import config from "@/lib/endpoint";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const getBlogs = createAsyncThunk(
  "blog/getBlogs",
  async ({ page, limit } = {}, { rejectWithValue }) => {
    try {
      const response = await api.get(config.public.blogs, {
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

const getSingleBlog = createAsyncThunk(
  "blog/getSingleBlog",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`${config.public.blogs}/${id}`);

      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const createBlog = createAsyncThunk(
  "blog/createBlog",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post(`${config.admin.blogs}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        toast.success(response?.data?.message || "Blog created successfully");
      }
      return response?.data;
    } catch ({ message, response }) {
      toast.error(response?.data?.error || "Failed to create Blog");
      return rejectWithValue(message);
    }
  },
);

const updateBlog = createAsyncThunk(
  "blog/updateBlog",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await api.put(`${config.admin.blogs}/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        toast.success(response?.data?.message || "Blog Update successfully");
      }
      return response?.data;
    } catch ({ message, response }) {
      toast.error(response?.data?.error || "Failed to Update Blog");
      return rejectWithValue(message);
    }
  },
);

const deleteBlog = createAsyncThunk(
  "blog/deleteBlog",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`admin/blog/${id}`);
      if (response.status === 200) {
        toast.success(response?.data?.message || "Blog Deleted successfully");
      }
      return response?.data;
    } catch ({ message, response }) {
      toast.error(response?.data?.error || "Failed to Delete Blog");
      return rejectWithValue(message);
    }
  },
);

export { getBlogs, getSingleBlog, createBlog, updateBlog, deleteBlog };
