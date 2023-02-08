import { render, screen } from "@testing-library/react";
import FormBooking from "./FormBooking";
import { TIMES } from "../../model/constants";

describe("Table booking form:", () => {
  test("renders heading", () => {
    const handleSubmit = jest.fn();
    const handleDateChange = jest.fn();

    render(
      <FormBooking
        availableTimes={TIMES}
        onBookingSubmit={handleSubmit}
        onDateChange={handleDateChange}
      />
    );
    const headingElement = screen.getByText(
      /Enter your data to reserve a table/i
    );
    expect(headingElement).toBeInTheDocument();
  });
});
