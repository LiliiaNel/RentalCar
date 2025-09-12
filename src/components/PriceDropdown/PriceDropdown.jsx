import { useSelector } from "react-redux";
import { selectPrices } from "../../redux/cars/carsSelectors";

export default function PriceDropdown({ value, onChange }) {
  const prices = useSelector(selectPrices);

  return (
    <label>
      Price/ 1hour {" "}
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Any</option>
        {prices.map((price) => (
          <option key={price} value={price}>${price}/h</option>
        ))}
      </select>
    </label>
  );
}
