import classes from "./FormBooking.module.scss";
import { Formik, Form, FormikHelpers } from "formik";
import { BookingData } from "../../model/types";
import { Input, Button, Select } from "@chakra-ui/react";

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
  console.log("FormBooking ", availableTimes);
  return (
    <Formik
      initialValues={{
        resDate: "",
        resTime: "",
        numberOfGuests: 0,
        occasion: "",
      }}
      onSubmit={(
        values: BookingData,
        { setSubmitting }: FormikHelpers<BookingData>
      ) => {
        setTimeout(() => {
          console.log(values);
          onBookingSubmit(values);
          setSubmitting(false);
        }, 1000);
      }}
    >
      {(formik) => (
        <Form className={classes.form}>
          <h2 className={classes.title}>
            🍋 Enter your data to reserve a table 🍋
          </h2>
          <div className={classes.item}>
            <label htmlFor="resDate">
              Date:<sup>*</sup>
            </label>
            <Input
              className={classes.input}
              onChange={(e) => {
                formik.handleChange(e);
                onDateChange(e.target.value);
              }}
              type="date"
              id="resDate"
              name="resDate"
            />
          </div>

          <div className={classes.item}>
            <label htmlFor="resTime">
              Time:<sup>*</sup>
            </label>
            <Select
              className={classes.input}
              as="select"
              name="resTime"
              id="resTime"
              onChange={formik.handleChange}
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

          <div className={classes.item}>
            <label htmlFor="numberOfGuests">
              Number of guests: <sup>*</sup>
            </label>
            <Input
              className={classes.input}
              onChange={formik.handleChange}
              type="number"
              id="numberOfGuests"
              name="numberOfGuests"
              placeholder="1"
              min={1}
              max={10}
              value={formik.values.numberOfGuests}
            />
          </div>

          <div className={classes.item}>
            <label htmlFor="occasion">Occasion:</label>
            <Select
              className={classes.input}
              onChange={formik.handleChange}
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

          <Button
            className={classes.submit}
            type="submit"
            _hover={{ bg: "#f4ce14" }}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
