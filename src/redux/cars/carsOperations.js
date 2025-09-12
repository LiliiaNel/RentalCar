import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  const res = await fetch("https://car-rental-api.goit.global/cars");
  const data = await res.json();
  return data.cars; 
});

