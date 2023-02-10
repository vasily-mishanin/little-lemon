import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import FormBooking from "./FormBooking";
import { TIMES } from "../../model/constants";
import userEvent from "@testing-library/user-event";

describe("Table booking FORM:", () => {
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

  test("calls Date Change and Submit handlers with appropriate parameters", async () => {
    const handleSubmit = jest.fn();
    const handleDateChange = jest.fn();

    render(
      <FormBooking
        availableTimes={TIMES}
        onBookingSubmit={handleSubmit}
        onDateChange={handleDateChange}
      />
    );

    const dateSelect = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const submitBtn = screen.getByRole("button", { name: /submit/i });

    await act(async () => {
      const user = userEvent.setup();
      await user.type(dateSelect, "2023-02-20");
      await user.selectOptions(timeSelect, ["19:00"]);
      await user.click(submitBtn);
    });

    await waitFor(() => {
      expect(handleDateChange).toBeCalledWith("2023-02-20");

      expect(handleSubmit).toBeCalledWith({
        resDate: "2023-02-20",
        resTime: "19:00",
        numberOfGuests: 0,
        occasion: "",
      });
    });
  });
});
