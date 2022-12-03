import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllDataByCategory } from "../../api/dataApi";
import { QueryAllDataByCategoryType } from "../../types/queryTypes";
import { AllSuppliersType } from "./../../types/suppliersTypes";

export const getAllSuppliersThunk = createAsyncThunk<
  AllSuppliersType,
  QueryAllDataByCategoryType,
  { rejectValue: string }
>("suppliers/getAll", async ({ category, page }, { rejectWithValue }) => {
  try {
    const data = await getAllDataByCategory({ category, page });

    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
