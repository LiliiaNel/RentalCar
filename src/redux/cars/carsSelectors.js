import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.items;

export const selectCarsLoading = (state) => state.cars.isLoading;

export const selectCarsError = (state) => state.cars.error;

export const selectBrands = createSelector([selectCars], (cars) =>
  [...new Set(cars.map((car) => car.brand))].sort()
);

export const selectPrices = createSelector([selectCars], (cars) =>
  [...new Set(cars.map((car) => car.rentalPrice))].sort((a, b) => a - b)
);
