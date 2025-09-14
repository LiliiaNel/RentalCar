import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
    applied: null,
  },
  reducers: {
    setBrand: (state, action) => { state.brand = action.payload; },
    setRentalPrice: (state, action) => { state.rentalPrice = action.payload; },
    setMinMileage: (state, action) => { state.minMileage = action.payload; },
    setMaxMileage: (state, action) => { state.maxMileage = action.payload; },
    resetFilters: (state) => {
      state.brand = "";
      state.rentalPrice = "";
      state.minMileage = "";
      state.maxMileage = "";
    },
    applyFilters: (state) => {
      state.applied = {
        brand: state.brand,
        rentalPrice: state.rentalPrice,
        minMileage: state.minMileage,
        maxMileage: state.maxMileage,
      };
    },
  },
});

export const { setBrand, setRentalPrice, setMinMileage, setMaxMileage, resetFilters, applyFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;


