import {
  BookingsContext,
  BookingsProvider,
} from "../../store/bookings-context";
import BookingPage from "./BookingPage";

import {
  act,
  fireEvent,
  getByLabelText,
  prettyDOM,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { TIMES } from "../../model/constants";
import {
  ActionTypes,
  bookingsReducer,
  BookingState,
  Dispatch,
} from "../../store/bookings-context";
import { fetchAPI } from "../../api/bookings";
import { dateToYYYYMMDD } from "../../helpers/helpers";

describe("BookingsPage", () => {
  test("Renders Page Heading", () => {
    render(<BookingPage />, { wrapper: BrowserRouter });
    const headingElement = screen.getByText(/Reserve a table at Little Lemon/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("Renders Form Heading", () => {
    render(<BookingPage />, { wrapper: BrowserRouter });
    const headingElement = screen.getByText(
      /Enter your data to reserve a table/i
    );
    expect(headingElement).toBeInTheDocument();
  });

  test("updates times, reducer works", () => {
    const today = new Date().toString();
    const initialState: BookingState = {
      selectedDate: today,
      availableTimes: [{ date: today, times: TIMES }],
      bookings: [],
    };

    expect(initialState.availableTimes[0].times.includes("19:00")).toBeTruthy();

    const stateAfterSelectionTime = bookingsReducer(initialState, {
      type: ActionTypes.SUBMIT_BOOKING,
      payload: {
        selectedTime: "19:00",
        selectedDate: today,
        availableTimes: [""],
        occasion: "",
        numberOfGuests: 0,
      },
    });

    expect(
      stateAfterSelectionTime.availableTimes[0].times.includes("19:00")
    ).toBeFalsy();
  });

  test("BookingPage shows default value", () => {
    render(<BookingPage />, { wrapper: BrowserRouter });
    expect(screen.getByText(/select time/i)).toBeInTheDocument();
  });

  test("BookingPage shows value from provider", () => {
    const providerProps: { state: BookingState; dispatch: Dispatch } = {
      state: {
        selectedDate: "2023-02-09",
        availableTimes: [{ date: "2023-02-09", times: ["17:00", "19:00"] }],
        bookings: [],
      },
      dispatch: () => {},
    };
    render(
      <BookingsContext.Provider value={providerProps}>
        <BookingPage />
      </BookingsContext.Provider>,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByText(/19:00/i)).toBeInTheDocument();
  });

  test("Initializes Times", () => {
    const DATE = "2023-02-09";
    const providerProps: { state: BookingState; dispatch: Dispatch } = {
      state: {
        selectedDate: DATE,
        availableTimes: [{ date: DATE, times: TIMES }],
        bookings: [],
      },
      dispatch: () => {},
    };

    render(
      <BookingsContext.Provider value={providerProps}>
        <BookingPage />
      </BookingsContext.Provider>,
      { wrapper: BrowserRouter }
    );

    const timesSelectOptions = screen.getAllByTestId("resTime");
    expect(timesSelectOptions.map((el) => el.innerHTML).join("")).toEqual(
      TIMES.join("")
    );
  });

  test("Selecting Time and Submit - delete this time from certain date", async () => {
    let date = dateToYYYYMMDD(new Date().toDateString());
    let date_1 = "2023-02-20";
    const dateString = new Date(date).toDateString(); // like 2023-02-08T16:18:32.025Z
    const VALID_DATE = new Date(dateString).toString(); // to become 2023-02-08T00:00:00.000Z

    const providerProps: { state: BookingState; dispatch: Dispatch } = {
      state: {
        selectedDate: VALID_DATE,
        availableTimes: [{ date: VALID_DATE, times: TIMES }],
        bookings: [],
      },

      dispatch: (action) => {
        console.log("providerProps.state ", providerProps.state);
        bookingsReducer(providerProps.state, action);
      },
    };

    render(
      <BookingsContext.Provider value={providerProps}>
        <BookingPage />
      </BookingsContext.Provider>,
      { wrapper: BrowserRouter }
    );

    const timeOption = screen.getByText("19:00");
    expect(timeOption).toBeInTheDocument();

    const timeSelect = screen.getByLabelText(/time/i);
    const numberOfGuestsInput = screen.getByLabelText(/number of guests/i);
    const submitBtn = screen.getByRole("button", { name: /submit/i });

    await act(async () => {
      const user = userEvent.setup();
      await user.selectOptions(timeSelect, ["19:00"]);
      await user.type(numberOfGuestsInput, "5");
      await user.click(submitBtn);
    });

    act(() => {
      providerProps.dispatch({
        type: ActionTypes.SUBMIT_BOOKING,
        payload: {
          selectedDate: VALID_DATE,
          selectedTime: "19:00",
          numberOfGuests: 5,
          occasion: "",
          availableTimes: [""],
        },
      });
    });

    await waitFor(() => {
      expect(timeOption).not.toBeInTheDocument();
    });
  });
});
