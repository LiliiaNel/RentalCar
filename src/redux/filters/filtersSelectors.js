import { createSelector } from "@reduxjs/toolkit";

export const selectFilters = (state) => state.filters;

export const selectFilteredCars = createSelector(
  [state => state.cars.items, selectFilters],
  (cars, filters) => {
    return cars.filter(car => {
      const matchBrand = filters.brand ? car.brand === filters.brand : true;
      const matchPrice = filters.price ? car.rentalPrice === filters.price : true;
      const matchMileageFrom = filters.mileageFrom ? car.mileage >= filters.mileageFrom : true;
      const matchMileageTo = filters.mileageTo ? car.mileage <= filters.mileageTo : true;
      return matchBrand && matchPrice && matchMileageFrom && matchMileageTo;
    });
  }
);
