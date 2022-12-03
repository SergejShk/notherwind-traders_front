import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllDataByCategory } from "../../api/dataApi";
import { AllCustomersType } from "../../types/customersTypes";
import { QueryAllDataByCategoryType } from "../../types/queryTypes";

export const getAllCustomersThunk = createAsyncThunk<
  AllCustomersType,
  QueryAllDataByCategoryType,
  { rejectValue: string }
>("customers/getAll", async ({ category, page }, { rejectWithValue }) => {
  try {
    const data = await getAllDataByCategory({ category, page });

    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
