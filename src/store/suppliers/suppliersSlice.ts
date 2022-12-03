import { SuppliersStore } from "./../../types/suppliersTypes";
import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllSuppliersThunk } from "./suppliersOperations";

const initialState: SuppliersStore = {
  total: null,
  data: [],
  isLoading: false,
  error: "",
};

const suppliersSlice = createSlice({
  name: "suppliers",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllSuppliersThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSuppliersThunk.fulfilled, (state, { payload }) => {
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

export default suppliersSlice.reducer;
