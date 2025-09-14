import { useState, useRef, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import { useFormikContext } from 'formik';
import 'react-day-picker/style.css';
import css from './DatePickerInput.module.css';

export default function DatePicker({ name, placeholder }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);
  const { values, setFieldValue } = useFormikContext();

  const formatDate = (date) => {
    if (!date) return "";
    const d = String(date.getDate()).padStart(2, "0");
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const y = date.getFullYear();
    return `${d}.${m}.${y}`;
  };

  const handleSelect = (date) => {
    setSelected(date);
    setFieldValue(name, formatDate(date));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <input
        type="text"
        value={values[name]}
        placeholder={placeholder}
        readOnly
        onClick={() => setOpen(!open)}
        className={css.inputField} 
      />
      {open && (
        <div style={{ position: "absolute", top: "100%", left: 0, zIndex: 50 }}>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={handleSelect}
            navLayout="around"
            showOutsideDays
            classNames={{
              root: css.calendar,
              nav: css.nav,
              caption: css.caption,
              caption_label: css.captionLabel,
              nav_button: css.navButton,
              chevron: css.myChevron,
              button_previous: css.prevBtn, 
              button_next: css.nextBtn,
              weekdays: css.weekdaysRow,
              weekday: css.weekday,
              day: css.dayCell,
              day_button: css.dayButton,
              selected: css.selected,
              today: css.today,
              outside: css.outside,
            }}
          />
        </div>
      )}
    </div>
  );
}
