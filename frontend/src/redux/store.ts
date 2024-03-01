import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducer from "./hooks/auth/user";

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
