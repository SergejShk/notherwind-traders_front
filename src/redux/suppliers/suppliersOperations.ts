import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllSuppliers } from "../../services/suppliersApi";
import { AllSuppliersType, QuerySuppliers } from "./../../types/suppliersTypes";

export const getAllSuppliersThunk = createAsyncThunk<
  AllSuppliersType,
  QuerySuppliers,
  { rejectValue: string }
>("suppliers/getAll", async (query, { rejectWithValue }) => {
  try {
    const data = await getAllSuppliers(query);

    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
