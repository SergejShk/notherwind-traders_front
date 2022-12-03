import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllDataByCategory } from "../../api/dataApi";
import { QueryAllDataByCategoryType } from "../../types/queryTypes";
import { AllProductsType } from "./../../types/productsTypes";

export const getAllProductsThunk = createAsyncThunk<
  AllProductsType,
  QueryAllDataByCategoryType,
  { rejectValue: string }
>("products/getAll", async ({ category, page }, { rejectWithValue }) => {
  try {
    const data = await getAllDataByCategory({ category, page });

    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
