import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  availability: string;
  price: string[];
  brand: string[];
  color: string[];
  material: string[];
  level: string[];
  sort_by: string;
}

const initialState = {
  availability: "",
  price: [],
  brand: [],
  color: [],
  material: [],
  level: [],
  sort_by: "",
} as CounterState;

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    setAvailability: (state, action) => {
      state.availability = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setMaterial: (state, action) => {
      state.material = action.payload;
    },
    setLevel: (state, action) => {
      state.level = action.payload;
    },
    setSort_by: (state, action) => {
      state.sort_by = action.payload;
    },
  },
});

export const {
  setAvailability,
  setBrand,
  setColor,
  setMaterial,
  setLevel,
  setPrice,
  setSort_by,
} = filterSlice.actions;
export default filterSlice.reducer;
