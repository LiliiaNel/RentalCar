import clsx from 'clsx';
import css from './MileageFilter.module.css'

export default function MileageFilter({ valueFrom, valueTo, onChangeFrom, onChangeTo }) {

  const formatNumber = (num) =>
    num !== "" && !isNaN(num)
      ? new Intl.NumberFormat("en-US").format(Number(num))
      : "";

  const parseNumber = (str) => {
    const numeric = str.replace(/[^\d]/g, ""); 
    return numeric === "" ? "" : Number(numeric);
  };

  const handleChange = (e, onChange) => {
    onChange(parseNumber(e.target.value));
  };


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
              onChange={(e) => handleChange(e, onChangeFrom)}
              className={clsx(css.inputFrom, css.input)}
            />
          </div>

          <div className={css.inputWrapper}>
            <span className={css.prefix}>To</span>
            <input
              type="text"
              inputMode="numeric"
              value={formatNumber(valueTo)}
              onChange={(e) => handleChange(e, onChangeTo)}
              className={clsx(css.inputTo, css.input)}
            />
          </div>
        </div>
      </label>
    </div>
  );
}
