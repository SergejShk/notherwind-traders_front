import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllDataByCategory } from "../../services/dataApi";
import { AllEmployeesType } from "../../types/employeesTypes";
import { QueryAllDataByCategoryType } from "../../types/queryTypes";

export const getAllEmployeesThunk = createAsyncThunk<
  AllEmployeesType,
  QueryAllDataByCategoryType,
  { rejectValue: string }
>("employees/getAll", async ({ category, page }, { rejectWithValue }) => {
  try {
    const data = await getAllDataByCategory({ category, page });

    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
