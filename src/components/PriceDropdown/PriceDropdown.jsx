import css from './PriceDropdown.module.css'
import { useSelector } from "react-redux";
import { selectPrices } from "../../redux/cars/carsSelectors";

export default function PriceDropdown({ value, onChange }) {
  const prices = useSelector(selectPrices);

  return <div>
    <label className={css.label}>
      Price/ 1hour {" "}
      <select value={value} onChange={(e) => onChange(e.target.value)} className={css.input}>
        <option value="">Choose a price</option>
        {prices.map((price) => (
          <option key={price} value={price}>${price}/h</option>
        ))}
      </select>
    </label>
  </div>;
}
