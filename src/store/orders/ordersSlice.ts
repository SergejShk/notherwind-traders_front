import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllOrdersThunk } from "./ordersOperations";
import { OrdersStore } from "../../types/ordersTypes";

const initialState: OrdersStore = {
  total: null,
  data: [],
  isLoading: false,
  error: "",
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllOrdersThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrdersThunk.fulfilled, (state, { payload }) => {
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

export default ordersSlice.reducer;
