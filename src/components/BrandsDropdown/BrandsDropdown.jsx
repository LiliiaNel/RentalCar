import css from './BrandsDropdown.module.css'
import { useSelector } from "react-redux";
import { selectBrands } from "../../redux/cars/carsSelectors";

export default function BrandDropdown({ value, onChange }) {
  const brands = useSelector(selectBrands);

  return <div className={css.wrapper}>
    <label className={css.label}>
      Car brand {" "}
      <select value={value} onChange={(e) => onChange(e.target.value)} className={css.input}>
        <option value="">Choose a brand</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>{brand}</option>
        ))}
      </select>
    </label>
    </div>
}
