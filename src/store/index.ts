import { combineReducers, configureStore } from "@reduxjs/toolkit";
import statsReducer from "./reducers/statsSlice";

const reducers = combineReducers({
  stats: statsReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
