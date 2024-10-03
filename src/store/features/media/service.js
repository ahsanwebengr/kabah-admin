import api from "@/lib/api";
import config from "@/lib/endpoint";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const updatePlanMedia = createAsyncThunk(
  "media/updatePlanMedia",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await api.put(`${config.admin.plan_media}/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        toast.success(
          response?.data?.message || "Package media updated successfully",
        );
      }
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export { updatePlanMedia };
