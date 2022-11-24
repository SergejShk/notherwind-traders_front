import { combineReducers, configureStore } from "@reduxjs/toolkit";
import suppliersReducer from "./suppliers/suppliersSlice";
import productsReducer from "./products/productsSlice";

const reducers = combineReducers({
  suppliers: suppliersReducer,
  products: productsReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
