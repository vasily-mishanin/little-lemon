import { useContext } from "react";
import classes from "./BookingConfirmedPage.module.scss";
import { BookingsContext } from "../../store/bookings-context";
import ButtonCTA from "../../components/ButtonCTA/ButtonCTA";

export default function BookingConfirmedPage() {
  const bookingCtx = useContext(BookingsContext);
  const lastBooking = bookingCtx.state.bookings.at(-1);
  console.log(bookingCtx.state.bookings);
  let bookingDate = "";
  if (lastBooking && lastBooking.resDate) {
    bookingDate = new Date(lastBooking.resDate).toDateString();
  }

  return (
    <main className={classes.bookingPage}>
      <h1 className={classes.title}> You've successfully reserved a table</h1>
      <div className={classes.card}>
        <p>
          <span className={classes.detail}>Date:</span> {bookingDate}
        </p>
        <p>
          <span className={classes.detail}>Time:</span>
          {bookingCtx.state.bookings.at(-1)?.resTime}
        </p>
        <p>
          <span className={classes.detail}>Occation:</span>
          {bookingCtx?.state.bookings.at(-1)?.occasion}
        </p>
        <p>
          <span className={classes.detail}>Number of guests:</span>
          {bookingCtx?.state.bookings.at(-1)?.numberOfGuests}
        </p>
      </div>
      <ButtonCTA text="⬅ Menu" link="/menu" />
    </main>
  );
}
