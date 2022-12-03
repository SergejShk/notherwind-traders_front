import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllCustomersThunk } from "./customersOperations";
import { CustomersStore } from "../../types/customersTypes";

const initialState: CustomersStore = {
  total: null,
  data: [],
  isLoading: false,
  error: "",
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllCustomersThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCustomersThunk.fulfilled, (state, { payload }) => {
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

export default customersSlice.reducer;
