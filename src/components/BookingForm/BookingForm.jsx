import { Formik, Form, Field } from "formik";
import css from './BookingForm.module.css';
import { userSchema } from '../../validation/userSchema'

export default function BookingForm() {
  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Booking submitted:", values);
    // To do: imitate sending data!!!!!!
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={userSchema}>
      {() => (
        <Form className={css.bookingForm}>
          <h3>Book your car now</h3>
          <p>Stay connected! We are always ready to help you.</p>
          <div className={css.inputsWrapper}>
          <Field
            type="text"
            name="name"
            placeholder="Name*"
            required
            className={css.inputField}
          />
          <Field
            type="email"
            name="email"
            placeholder="Email*"
            required
            className={css.inputField}
          />
          <Field
            type="date"
            name="date"
            placeholder="Booking date"
            className={css.inputField}
          />
          <Field
            as="textarea"
            name="comment"
            placeholder="Comment"
            className={css.textAreaField}
          />
          </div>
          <button type="submit" className={css.submitButton}>Send</button>
        </Form>
      )}
    </Formik>
  );
}
