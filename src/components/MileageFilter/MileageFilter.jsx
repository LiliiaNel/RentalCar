import clsx from 'clsx';
import css from './MileageFilter.module.css'

export default function MileageFilter({ valueFrom, valueTo, onChangeFrom, onChangeTo }) {

  const formatNumber = (num) => {
    if (!num) return "";
    return new Intl.NumberFormat("en-US").format(num);
  };

  const parseNumber = (str) => str.replace(/,/g, "");



  return (
    <div>
      <label className={css.label}>
        Car mileage / km
        <div className={css.wrapper}>
          <div className={css.inputWrapper}>
            <span className={css.prefix}>From</span>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(valueFrom)}
              onChange={(e) => onChangeFrom(parseNumber(e.target.value))}
              className={clsx(css.inputFrom, css.input)}
            />
          </div>

          <div className={css.inputWrapper}>
            <span className={css.prefix}>To</span>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(valueTo)}
              onChange={(e) => onChangeTo(parseNumber(e.target.value))}
              className={clsx(css.inputTo, css.input)}
            />
          </div>
        </div>
      </label>
    </div>
  );
}
