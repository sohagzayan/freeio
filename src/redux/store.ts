import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./features/filterSlice";
import mobileSideBarSlice from "./features/mobileSideBarSlice";

export const store = configureStore({
  reducer: {
    mobileSideBarSlice,
    filterSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
