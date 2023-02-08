import { useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../api/bookings";
import FormBooking from "../../components/FormBooking/FormBooking";
import { BookingData } from "../../model/types";
import { ActionTypes, BookingsContext } from "../../store/bookings-context";
import classes from "./BookingPage.module.scss";

export default function BookingPage() {
  const bookingsCtx = useContext(BookingsContext);
  const navigate = useNavigate();
  console.log("BookingPage", bookingsCtx.state);

  useEffect(() => {
    const today = new Date().toDateString(); // like 2023-02-08T16:18:32.025Z
    const normalizedToday = new Date(today); // to become 2023-02-08T00:00:00.000Z
    const fetchedTimes = fetchAPI(normalizedToday);

    bookingsCtx.dispatch({
      type: ActionTypes.SELECT_DATE,
      payload: {
        selectedDate: normalizedToday.toString(),
        availableTimes: fetchedTimes,
        selectedTime: "",
        occasion: "",
        numberOfGuests: 0,
      },
    });
  }, []);

  const handleDateChange = (date: string) => {
    console.log("handleDateChange", date);
    bookingsCtx?.dispatch({
      type: ActionTypes.SELECT_DATE,
      payload: {
        selectedDate: new Date(date).toString(),
        selectedTime: "",
        availableTimes: [""],
        occasion: "",
        numberOfGuests: 0,
      },
    });
  };

  const handleBookingTableFormSubmit = (enteredValues: BookingData) => {
    console.log("handleBookingTableFormSubmit", enteredValues);
    const { resDate, resTime, numberOfGuests, occasion } = enteredValues;
    bookingsCtx?.dispatch({
      type: ActionTypes.SUBMIT_BOOKING,
      payload: {
        selectedTime: resTime,
        selectedDate: new Date(resDate).toString(),
        availableTimes: [""],
        occasion: occasion,
        numberOfGuests: numberOfGuests,
      },
    });

    if (submitAPI(enteredValues)) {
      navigate("/success");
    }
  };

  //add  GET_TIMES_FOR_THIS_DATE ?
  const todayAvailableTimes = bookingsCtx.state.availableTimes.find(
    (item) => item.date === bookingsCtx.state.selectedDate
  );

  return (
    <main className={classes.bookingPage}>
      <h1 className={classes.title}>Reserve a table at Little Lemon</h1>
      <FormBooking
        availableTimes={todayAvailableTimes?.times}
        onBookingSubmit={handleBookingTableFormSubmit}
        onDateChange={handleDateChange}
      />
    </main>
  );
}
