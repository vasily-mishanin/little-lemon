import classes from "./FormBooking.module.scss";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface IFormBookingProps {
  availableTimes: string[];
}

interface Values {
  resDate: string;
  resTime: string;
  numberOfGuests: number;
  occasion: string;
}

export default function FormBooking({ availableTimes }: IFormBookingProps) {
  return (
    <Formik
      initialValues={{
        resDate: "",
        resTime: "",
        numberOfGuests: 0,
        occasion: "",
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {(formik) => (
        <Form>
          <label htmlFor="resDate">Date</label>
          <Field type="date" id="resDate" name="resDate" />

          <label htmlFor="resTime">Time</label>
          <Field
            as="select"
            name="resTime"
            id="resTime"
            onChange={formik.handleChange}
            value={formik.values.resTime}
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </Field>

          <label htmlFor="numberOfGuests">Number of guests</label>
          <Field
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            placeholder="1"
            min="1"
            max="10"
            onChange={formik.handleChange}
            value={formik.values.numberOfGuests}
          />

          <label htmlFor="occasion">Occasion</label>
          <Field
            as="select"
            id="occasion"
            name="occasion"
            onChange={formik.handleChange}
            value={formik.values.occasion}
          >
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </Field>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
