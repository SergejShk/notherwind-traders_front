import { combineReducers, configureStore } from "@reduxjs/toolkit";
import suppliersReducer from "./suppliers/suppliersSlice";

const reducers = combineReducers({
  suppliers: suppliersReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
