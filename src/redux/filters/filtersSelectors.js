import { createSelector } from "@reduxjs/toolkit";

export const selectFilters = (state) => state.filters;

export const selectFilteredCars = createSelector(
  [state => state.cars.items, selectFilters],
  (cars, filters) => {
    return cars.filter(car => {
      const matchBrand = filters.brand ? car.brand === filters.brand : true;
      const matchPrice = filters.rentalPrice ? car.rentalPrice === filters.rentalPrice : true;
      const matchMileageFrom = filters.minMileage ? car.mileage >= filters.minMileage : true;
      const matchMileageTo = filters.maxMileage ? car.mileage <= filters.maxMileage : true;
      return matchBrand && matchPrice && matchMileageFrom && matchMileageTo;
    });
  }
);

export const selectAppliedFilters = (state) => state.filters.applied;
