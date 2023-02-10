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
import { dateToYYYYMMDD } from "../../helpers/helpers";

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
    let VALID_DATE = dateToYYYYMMDD(new Date().toDateString());

    render(
      <FormBooking
        availableTimes={TIMES}
        onBookingSubmit={handleSubmit}
        onDateChange={handleDateChange}
      />
    );

    const dateSelect = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const numberOfGuestsInput = screen.getByLabelText(/number of guests/i);
    const submitBtn = screen.getByRole("button", { name: /submit/i });

    await act(async () => {
      const user = userEvent.setup();
      await user.type(dateSelect, VALID_DATE);
      await user.selectOptions(timeSelect, ["19:00"]);
      await user.type(numberOfGuestsInput, "5");
      await user.click(submitBtn);
    });

    await waitFor(() => {
      expect(handleDateChange).toBeCalledWith(VALID_DATE);

      expect(handleSubmit).toBeCalledWith({
        resDate: VALID_DATE,
        resTime: "19:00",
        numberOfGuests: 5,
        occasion: "",
      });
    });
  });
});

describe("Form Validation", () => {
  let VALID_DATE = dateToYYYYMMDD(new Date().toDateString());
  let INVALID_DATE = dateToYYYYMMDD(new Date(2022, 12, 1).toDateString());
  console.log(VALID_DATE, INVALID_DATE);

  const handleSubmit = jest.fn();
  const handleDateChange = jest.fn();

  test("Submit with VALID_DATE", async () => {
    render(
      <FormBooking
        availableTimes={TIMES}
        onBookingSubmit={handleSubmit}
        onDateChange={handleDateChange}
      />
    );

    const dateSelect = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const numberOfGuestsInput = screen.getByLabelText(/number of guests/i);
    const submitBtn = screen.getByRole("button", { name: /submit/i });

    await act(async () => {
      const user = userEvent.setup();
      await user.type(dateSelect, VALID_DATE);
      await user.selectOptions(timeSelect, ["19:00"]);
      await user.type(numberOfGuestsInput, "5");
      await user.click(submitBtn);
    });

    await waitFor(() => {
      expect(handleSubmit).toBeCalled();
    });
  });

  test("Not submit with INVALID_DATE", async () => {
    render(
      <FormBooking
        availableTimes={TIMES}
        onBookingSubmit={handleSubmit}
        onDateChange={handleDateChange}
      />
    );

    const dateSelect = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const numberOfGuestsInput = screen.getByLabelText(/number of guests/i);
    const submitBtn = screen.getByRole("button", { name: /submit/i });

    await act(async () => {
      const user = userEvent.setup();
      await user.type(dateSelect, INVALID_DATE);
      await user.selectOptions(timeSelect, ["19:00"]);
      await user.type(numberOfGuestsInput, "5");
      await user.click(submitBtn);
    });

    await waitFor(() => {
      expect(handleSubmit).not.toBeCalled();
    });
  });

  test("Not submit with invalid number of guests = 0", async () => {
    render(
      <FormBooking
        availableTimes={TIMES}
        onBookingSubmit={handleSubmit}
        onDateChange={handleDateChange}
      />
    );

    const dateSelect = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const numberOfGuestsInput = screen.getByLabelText(/number of guests/i);
    const submitBtn = screen.getByRole("button", { name: /submit/i });

    await act(async () => {
      const user = userEvent.setup();
      await user.type(dateSelect, VALID_DATE);
      await user.selectOptions(timeSelect, ["19:00"]);
      await user.type(numberOfGuestsInput, "0");
      await user.click(submitBtn);
    });

    await waitFor(() => {
      expect(handleSubmit).not.toBeCalled();
    });
  });

  test("Not submit with invalid number of guests = 11", async () => {
    render(
      <FormBooking
        availableTimes={TIMES}
        onBookingSubmit={handleSubmit}
        onDateChange={handleDateChange}
      />
    );

    const dateSelect = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const numberOfGuestsInput = screen.getByLabelText(/number of guests/i);
    const submitBtn = screen.getByRole("button", { name: /submit/i });

    await act(async () => {
      const user = userEvent.setup();
      await user.type(dateSelect, VALID_DATE);
      await user.selectOptions(timeSelect, ["19:00"]);
      await user.type(numberOfGuestsInput, "11");
      await user.click(submitBtn);
    });

    await waitFor(() => {
      expect(handleSubmit).not.toBeCalled();
    });
  });
});
