import { combineReducers, configureStore } from "@reduxjs/toolkit";
import suppliersReducer from "./suppliers/suppliersSlice";
import productsReducer from "./products/productsSlice";
import ordersReducer from "./orders/ordersSlice";
import employeesReducer from "./employees/employeesSlice";

const reducers = combineReducers({
  suppliers: suppliersReducer,
  products: productsReducer,
  orders: ordersReducer,
  employees: employeesReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;