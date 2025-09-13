import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (filters, thunkAPI) => {
    try {
      const params = {};
      if (filters.brand) params.brand = filters.brand;
      if (filters.price) params.price = filters.price;
      if (filters.mileageFrom) params.mileageFrom = filters.mileageFrom;
      if (filters.mileageTo) params.mileageTo = filters.mileageTo;

      const { data } = await axios.get("https://car-rental-api.goit.global/cars", { params });

      return data.cars;
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

