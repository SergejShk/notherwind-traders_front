import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPayload, TStatsStore } from "../../types/storeTypes";

const initialState: TStatsStore = {
  queryCount: 0,
  resultCount: 0,
  queryTypes: {
    select: 0,
    selectWhere: 0,
    selectWithJoin: 0,
  },
  dbQuery: [],
};

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    setStats(state, action: PayloadAction<TPayload>) {
      state.queryCount += 1;
      state.resultCount += action.payload.metrics.resultCount;
      state.dbQuery = [action.payload.stats, ...state.dbQuery];
      action.payload.metrics.type.forEach((el) => {
        if (state.queryTypes.hasOwnProperty(el)) {
          state.queryTypes[el] += 1;
        }
      });
    },
  },
});

export const { setStats } = statsSlice.actions;
export default statsSlice.reducer;
