import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    brand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
    applied: null,
  },
  reducers: {
    setBrand: (state, action) => { state.brand = action.payload; },
    setPrice: (state, action) => { state.price = action.payload; },
    setMileageFrom: (state, action) => { state.mileageFrom = action.payload; },
    setMileageTo: (state, action) => { state.mileageTo = action.payload; },
    resetFilters: (state) => {
      state.brand = "";
      state.price = "";
      state.mileageFrom = "";
      state.mileageTo = "";
    },
    applyFilters: (state) => {
      state.applied = {
        brand: state.brand,
        price: state.price,
        mileageFrom: state.mileageFrom,
        mileageTo: state.mileageTo,
      };
    },
  },
});

export const { setBrand, setPrice, setMileageFrom, setMileageTo, resetFilters, applyFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;


