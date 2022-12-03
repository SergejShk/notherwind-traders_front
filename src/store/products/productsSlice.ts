import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllProductsThunk } from "./productsOperations";
import { ProductsStore } from './../../types/productsTypes';

const initialState: ProductsStore = {
  total: null,
  data: [],
  isLoading: false,
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProductsThunk.fulfilled, (state, { payload }) => {
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

export default productsSlice.reducer;
