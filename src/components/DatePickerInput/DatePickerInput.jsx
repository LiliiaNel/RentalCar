import { useState, useRef, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormikContext } from 'formik';
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB";
registerLocale("en-GB", enGB);

import css from './DatePickerInput.module.css';

export default function DatePickerInput ({ name, placeholder }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { values, setFieldValue } = useFormikContext();

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


    const formatDateRange = (range) => {
    if (!range || !range[0]) return "";
    const d = (date) => {
      if (!date) return "";
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    };
    return range[1] ? `${d(range[0])} - ${d(range[1])}` : d(range[0]);
  };


  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <input
        type="text"
        value={formatDateRange(values[name])}
        placeholder={placeholder}
        readOnly
        onClick={() => setOpen(!open)}
        className={css.inputField} 
      />
      {open && (
        <div className={css.container} style={{ position: "absolute", top: "100%", left: 0, zIndex: 9999, overflow: "visible" }} children>
           <DatePicker
              selectsRange
              locale="en-GB"
              startDate={values[name]?.[0] || null}
              endDate={values[name]?.[1] || null}
              minDate={new Date()} 
              onChange={(dates) => {
                const [start, end] = dates;
                setFieldValue(name, [start, end]);
                if (start && end) setOpen(false);
              }}
              inline
              shouldCloseOnSelect={true}
              dateFormat="dd/MM/yyyy"
              showPopperArrow
              fixedHeight={false} 
              calendarClassName={css.calendar}
          />
        </div>
      )}
    </div>
  );
}
