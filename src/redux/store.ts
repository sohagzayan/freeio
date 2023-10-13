import { configureStore } from "@reduxjs/toolkit";
import mobileSideBarSlice from "./features/mobileSideBarSlice";

export const store = configureStore({
  reducer: {
    mobileSideBarSlice,
  },
  //   devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
