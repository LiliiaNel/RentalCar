import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars?.items ?? [];

export const selectSelectedCar = (state) => state.cars.selectedCar;

export const selectCarsLoading = (state) => state.cars.isLoading;

export const selectCarsError = (state) => state.cars.error;

export const selectCurrentPage = (state) => state.cars.page;

export const selectTotalPages = (state) => state.cars.totalPages;

export const selectTotalCars = (state) => state.cars.totalCars;

export const selectHasNextPage = (state) => state.cars.page < state.cars.totalPages;

export const selectBrands = createSelector([selectCars], (cars) =>
  [...new Set(cars.map((car) => car.brand))].sort()
);

export const selectPrices = createSelector([selectCars], (cars) =>
  [...new Set(cars.map((car) => car.rentalPrice))].sort((a, b) => a - b)
);
