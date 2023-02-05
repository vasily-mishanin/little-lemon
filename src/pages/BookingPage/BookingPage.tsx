import FormBooking from "../../components/FormBooking/FormBooking";

const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export default function Home() {
  return (
    <main>
      <h1>Booking Page</h1>
      <FormBooking availableTimes={times} />
    </main>
  );
}
