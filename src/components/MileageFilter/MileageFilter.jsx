export default function MileageFilter({ valueFrom, valueTo, onChangeFrom, onChangeTo }) {
  return (
    <div>
      <label>Сar mileage / km</label>
      <input
        type="number"
        value={valueFrom}
        onChange={(e) => onChangeFrom(e.target.value)}
        placeholder="From"
      />
      <input
        type="number"
        value={valueTo}
        onChange={(e) => onChangeTo(e.target.value)}
        placeholder="To"
      />
    </div>
  );
}
