import BookingPage from "./BookingPage";

import {
  act,
  fireEvent,
  getByLabelText,
  prettyDOM,
  render,
  screen,
} from "@testing-library/react";
import { TIMES } from "../../model/constants";
import {
  ActionTypes,
  bookingsReducer,
  State,
} from "../../store/bookings-context";

describe("BookingsPage", () => {
  test("Renders Page Heading", () => {
    render(<BookingPage />);
    const headingElement = screen.getByText(/Reserve a table at Little Lemon/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("Renders Form Heading", () => {
    render(<BookingPage />);
    const headingElement = screen.getByText(
      /Enter your data to reserve a table/i
    );
    expect(headingElement).toBeInTheDocument();
  });

  test("Initializes Times", () => {
    render(<BookingPage />);
    const timesSelectOptions = screen.getAllByTestId("resTime");
    expect(timesSelectOptions.map((el) => el.innerHTML).join("")).toEqual(
      TIMES.join("")
    );
  });

  test("updateTimes reducer works", () => {
    const today = new Date().toISOString();
    const initialState: State = {
      selectedDate: today,
      availableTimes: [{ date: today, times: TIMES }],
      bookings: [],
    };

    expect(initialState.availableTimes[0].times.includes("19:00")).toBeTruthy();

    const stateAfterSelectionTime = bookingsReducer(initialState, {
      type: ActionTypes.SUBMIT_BOOKING,
      payload: {
        selectedTime: "19:00",
        selectedDate: "",
        availableTimes: [""],
        occasion: "",
        numberOfGuests: 0,
      },
    });

    expect(
      stateAfterSelectionTime.availableTimes[0].times.includes("19:00")
    ).toBeFalsy();
  });

  // test("Updates Times options", () => {
  //   render(<BookingPage />); // this is render
  //   act(() => {
  //     // render(<BookingPage />); // this is NOT render
  //     const selectTime = screen.getByLabelText(/Time/i);
  //     const inputDate = screen.getByLabelText(/Date:/i);
  //     const inputNumberOfGuests = screen.getByLabelText(/Number of guests:/i);
  //     const submitButton = screen.getByText("Submit");

  //     fireEvent.change(inputDate, { target: { value: "2023-02-04" } });
  //     fireEvent.select(selectTime, { target: { value: "19:00" } });
  //     fireEvent.change(inputNumberOfGuests, { target: { value: "2" } });

  //     act(() => {
  //       fireEvent.click(submitButton);
  //     });
  //   });
  //   const selectedOptionAfterSubmit = screen.getByText(/19:00/i);
  //   expect(selectedOptionAfterSubmit).not.toBeInTheDocument();
  // });
});
