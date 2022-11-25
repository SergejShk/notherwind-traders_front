import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllEmployeesThunk } from "./employeesOperations";
import { EmployeesStore } from "../../types/employeesTypes";

const initialState: EmployeesStore = {
  total: null,
  data: [],
  isLoading: false,
  error: "",
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllEmployeesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEmployeesThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.total = payload.total;
        state.data = payload.data;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

export default employeesSlice.reducer;
