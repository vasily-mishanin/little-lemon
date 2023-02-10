import classes from "./FormBooking.module.scss";
import { Formik, Form, FormikHelpers } from "formik";
import { BookingData } from "../../model/types";
import { Input, Button, Select } from "@chakra-ui/react";
import { BookingsContext } from "../../store/bookings-context";
import { useContext } from "react";
import * as Yup from "yup";
import { dateToYYYYMMDD } from "../../helpers/helpers";

interface IFormBookingProps {
  availableTimes: string[] | undefined;
  onDateChange: (date: string) => void;
  onBookingSubmit: (values: BookingData) => void;
}

export default function FormBooking({
  availableTimes,
  onDateChange,
  onBookingSubmit,
}: IFormBookingProps) {
  const bookingsCtx = useContext(BookingsContext);
  let dateString = "";
  if (bookingsCtx.state.selectedDate) {
    dateString = dateToYYYYMMDD(bookingsCtx.state.selectedDate);
  }
  const dateSchema = Yup.string()
    .required("Please pick the date")
    .test(
      "is-today-or-future",
      "Date should be today or the future",
      (date) => {
        let today = new Date().toDateString();
        let inputDate = new Date(date).toDateString();
        const isValid = new Date(inputDate) >= new Date(today);
        return isValid;
      }
    );

  const timeSchema = Yup.string()
    .required("Please pick available time")
    .test(
      "is time",
      "Please pick available time",
      (time) => typeof parseInt(time) === "number"
    );

  const numberOfGuestsSchema = Yup.number()
    .min(1, "At least one guest")
    .max(10, "Maximum 10 guests")
    .required("Please let us know a number of guests");

  const BookingSchema = Yup.object().shape({
    resDate: dateSchema,
    resTime: timeSchema,
    numberOfGuests: numberOfGuestsSchema,
    occasion: Yup.string(),
  });

  return (
    <Formik
      initialValues={{
        resDate: dateString || "",
        resTime: "",
        numberOfGuests: 1,
        occasion: "",
      }}
      onSubmit={(
        values: BookingData,
        { setSubmitting }: FormikHelpers<BookingData>
      ) => {
        //setTimeout(() => {
        if (!values.resDate) {
          values.resDate = dateString;
        }
        onBookingSubmit(values);
        setSubmitting(false);
        // }, 1000);
      }}
      validationSchema={BookingSchema}
    >
      {(formik) => (
        <Form className={classes.form}>
          <h2 className={classes.title}>
            🍋 Enter your data to reserve a table 🍋
          </h2>
          <div className={classes.item}>
            <div className={classes.field}>
              <label htmlFor="resDate">
                Date:<sup>*</sup>
              </label>
              <Input
                className={classes.input}
                onChange={(e) => {
                  formik.handleChange(e);
                  onDateChange(e.target.value);
                }}
                onBlur={formik.handleBlur}
                type="date"
                id="resDate"
                name="resDate"
                value={dateString}
              />
            </div>
            <p className={classes.error}>
              {" "}
              {formik.touched.resDate &&
                formik.errors.resDate &&
                formik.errors.resDate}
            </p>
          </div>

          <div className={classes.item}>
            <div className={classes.field}>
              <label htmlFor="resTime">
                Time:<sup>*</sup>
              </label>
              <Select
                className={classes.input}
                as="select"
                name="resTime"
                id="resTime"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.resTime}
                placeholder="select time"
              >
                {availableTimes?.map((time) => (
                  <option key={time} value={time} data-testid="resTime">
                    {time}
                  </option>
                ))}
              </Select>
            </div>
            <p className={classes.error}>
              {" "}
              {formik.touched.resTime &&
                formik.errors.resTime &&
                formik.errors.resTime}
            </p>
          </div>

          <div className={classes.item}>
            <div className={classes.field}>
              <label htmlFor="numberOfGuests">
                Number of guests: <sup>*</sup>
              </label>
              <Input
                className={classes.input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
                id="numberOfGuests"
                name="numberOfGuests"
                placeholder="1"
                min={1}
                max={10}
                //value={formik.values.numberOfGuests}
              />
            </div>

            <p className={classes.error}>
              {" "}
              {formik.touched.numberOfGuests &&
                formik.errors.numberOfGuests &&
                formik.errors.numberOfGuests}
            </p>
          </div>

          <div className={classes.item}>
            <div className={classes.field}>
              <label htmlFor="occasion">Occasion:</label>
              <Select
                className={classes.input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                as="select"
                id="occasion"
                name="occasion"
                value={formik.values.occasion}
                placeholder="occation"
              >
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
              </Select>
            </div>
          </div>

          <Button
            className={classes.submit}
            type="submit"
            _hover={{ bg: "#f4ce14" }}
            aria-label="Submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
