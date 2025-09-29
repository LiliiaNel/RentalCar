import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (filters={}, thunkAPI) => {
    try {
      const params = {limit: 10, ...filters };

      if (!params.page) params.page = 1;

      if (filters.brand) params.brand = filters.brand;
      if (filters.rentalPrice) params.rentalPrice = filters.rentalPrice;
      if (filters.minMileage) params.minMileage = filters.minMileage;
      if (filters.maxMileage) params.maxMileage = filters.maxMileage;
      
      const { data } = await axios.get("https://car-rental-api.goit.global/cars", { params });
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://car-rental-api.goit.global/cars/${id}`);
      return response.data;

    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

