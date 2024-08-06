import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosReq } from "../baseUrl.js";

export const getAllProducts = createAsyncThunk("products/getAll", async () => {
  try {
    const res = await axiosReq.get();
    return res.data;
  } catch (err) {
    console.log(err);
  }
});
