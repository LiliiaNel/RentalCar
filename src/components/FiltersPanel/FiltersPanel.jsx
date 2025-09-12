import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/filters/filtersSelectors";
import { setBrand, setPrice, setMileageFrom, setMileageTo } from "../../redux/filters/filtersSlice";
import BrandDropdown from "../BrandsDropdown/BrandsDropdown";
import PriceDropdown from "../PriceDropdown/PriceDropdown";
import MileageFilter from "../MileageFilter/MileageFilter";

export default function FiltersPanel() {
  const dispatch = useDispatch();
  const { brand, price, mileageFrom, mileageTo } = useSelector(selectFilters);

  const handleBrandChange = (value) => dispatch(setBrand(value));
  const handlePriceChange = (value) => dispatch(setPrice(value));
  const handleMileageFromChange = (value) => dispatch(setMileageFrom(value));
  const handleMileageToChange = (value) => dispatch(setMileageTo(value));

  return (
    <div className="filters-panel">
      <div className="filters-wrapper">
        <BrandDropdown value={brand} onChange={handleBrandChange} />
        <PriceDropdown value={price} onChange={handlePriceChange} />
        <MileageFilter
          valueFrom={mileageFrom}
          valueTo={mileageTo}
          onChangeFrom={handleMileageFromChange}
          onChangeTo={handleMileageToChange}
        />
      </div>
    </div>
  );
}
