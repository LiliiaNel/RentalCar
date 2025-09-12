import clsx from 'clsx';
import css from './MileageFilter.module.css'



export default function MileageFilter({ valueFrom, valueTo, onChangeFrom, onChangeTo }) {
  return (
    <div >
      <label className={css.label}>Сar mileage / km
        <div className={css.wrapper}>
      <input
        type="number"
        value={valueFrom}
        onChange={(e) => onChangeFrom(e.target.value)}
        placeholder="From"
        className={css.input}
      />
      <input
        type="number"
        value={valueTo}
        onChange={(e) => onChangeTo(e.target.value)}
        placeholder="To"
        className={clsx(css.inputTo, css.input)} 
      />
      </div>
      </label>
    </div>
  );
}
