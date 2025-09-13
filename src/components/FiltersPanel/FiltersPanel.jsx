import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/filters/filtersSelectors";
import { setBrand, setPrice, setMileageFrom, setMileageTo, applyFilters } from "../../redux/filters/filtersSlice";
import BrandDropdown from "../BrandsDropdown/BrandsDropdown";
import PriceDropdown from "../PriceDropdown/PriceDropdown";
import MileageFilter from "../MileageFilter/MileageFilter";
import css from './FiltersPanel.module.css'

export default function FiltersPanel() {
  const dispatch = useDispatch();
  const { brand, price, mileageFrom, mileageTo } = useSelector(selectFilters);

  const handleBrandChange = (value) => dispatch(setBrand(value));
  const handlePriceChange = (value) => dispatch(setPrice(value));
  const handleMileageFromChange = (value) => dispatch(setMileageFrom(value));
  const handleMileageToChange = (value) => dispatch(setMileageTo(value));

  const handleSearch = () => {
    dispatch(applyFilters());
  };



  return (
    <div className={css.filtersPanel}>
      <div className={css.filtersWrapper}>
        <BrandDropdown value={brand} onChange={handleBrandChange} />
        <PriceDropdown value={price} onChange={handlePriceChange} />
        <MileageFilter
          valueFrom={mileageFrom}
          valueTo={mileageTo}
          onChangeFrom={handleMileageFromChange}
          onChangeTo={handleMileageToChange}
        />
      </div>
      <button className={css.searchBtn} onClick={handleSearch}>Search</button>
    </div>
  );
}
