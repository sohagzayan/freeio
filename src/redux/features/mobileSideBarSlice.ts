import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  isOpen: boolean;
}

const initialState = {
  isOpen: false,
} as CounterState;

export const mobileSideBarSlice = createSlice({
  name: "mobileSideBarSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    makeFalseIsOpen: (state) => {
      state.isOpen = false;
    },
    makeTrueIsOpen: (state) => {
      state.isOpen = true;
    },
  },
});

export const { makeFalseIsOpen, makeTrueIsOpen, reset } =
  mobileSideBarSlice.actions;
export default mobileSideBarSlice.reducer;
