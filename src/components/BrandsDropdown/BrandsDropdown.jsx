import { useSelector } from "react-redux";
import { selectBrands } from "../../redux/cars/carsSelectors";

export default function BrandDropdown({ value, onChange }) {
  const brands = useSelector(selectBrands);

  return (
    <label>
      Car brand {" "}
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">All</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>{brand}</option>
        ))}
      </select>
    </label>
  );
}
