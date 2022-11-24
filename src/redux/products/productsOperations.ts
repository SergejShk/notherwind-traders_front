import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../../services/productsApi";
import { AllProductsType, QueryProducts } from "./../../types/productsTypes";

export const getAllProductsThunk = createAsyncThunk<
  AllProductsType,
  QueryProducts,
  { rejectValue: string }
>("products/getAll", async (query, { rejectWithValue }) => {
  try {
    const data = await getAllProducts(query);

    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
