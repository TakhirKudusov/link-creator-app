import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { statisticsAPI } from "./APIs/statisticsAPI";

export const store = configureStore({
  reducer: {
    [statisticsAPI.reducerPath]: statisticsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(statisticsAPI.middleware),
});
