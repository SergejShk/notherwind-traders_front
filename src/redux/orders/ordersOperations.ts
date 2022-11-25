import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllDataByCategory } from "../../services/dataApi";
import { AllOrdersType } from "../../types/ordersTypes";
import { QueryAllDataByCategoryType } from "../../types/queryTypes";

export const getAllOrdersThunk = createAsyncThunk<
  AllOrdersType,
  QueryAllDataByCategoryType,
  { rejectValue: string }
>("orders/getAll", async ({ category, page }, { rejectWithValue }) => {
  try {
    const data = await getAllDataByCategory({ category, page });

    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
