import { createContext, useReducer } from "react";
import { fetchAPI } from "../api/bookings";
import { BookingData } from "../model/types";

export interface BookingState {
  selectedDate: string;
  availableTimes: { date: string; times: string[] }[];
  bookings: BookingData[];
}

export enum ActionTypes {
  SUBMIT_BOOKING = "SUBMIT_BOOKING",
  SELECT_DATE = "SELECT_DATE",
  GET_TIMES_FOR_THIS_DATE = "GET_TIMES_FOR_THIS_DATE",
}

export type Payload = {
  selectedDate: string;
  selectedTime: string;
  availableTimes: string[];
  numberOfGuests: number;
  occasion: string;
};

export interface Action {
  type: ActionTypes;
  payload: Payload;
}

export type Dispatch = (action: Action) => void;

const initialValue = {
  state: { selectedDate: "", availableTimes: [], bookings: [] },
  dispatch: () => {},
};

export const BookingsContext = createContext<{
  state: BookingState;
  dispatch: Dispatch;
}>(initialValue);

const initializeState = (): BookingState => {
  return {
    selectedDate: "",
    availableTimes: [],
    bookings: [],
  };
};

export const bookingsReducer = (
  state: BookingState,
  action: Action
): BookingState => {
  console.log("bookingsReducer");

  if (action.type === ActionTypes.SUBMIT_BOOKING) {
    console.log("bookingsReducer - SUBMIT_BOOKING", action.payload);
    const { selectedDate, selectedTime, numberOfGuests, occasion } =
      action.payload;

    const updatedItem = state.availableTimes.find(
      (item) => item.date === selectedDate
    );

    if (updatedItem) {
      const prevTimes = [...updatedItem.times];
      updatedItem.times = prevTimes.filter((time) => time !== selectedTime);

      const updatedItemIndex = state.availableTimes.findIndex(
        (item) => item.date === selectedDate
      );
      const updatedTimes = state.availableTimes;
      updatedTimes[updatedItemIndex] = updatedItem;

      return {
        ...state,
        availableTimes: updatedTimes,
        bookings: [
          ...state.bookings,
          {
            resDate: selectedDate,
            resTime: selectedTime,
            numberOfGuests: numberOfGuests || 0,
            occasion: occasion || "",
          },
        ],
      };
    }
  }

  if (action.type === ActionTypes.SELECT_DATE) {
    console.log("bookingsReducer - SELECT_DATE", action.payload.selectedDate);
    const { selectedDate } = action.payload;
    let newTimes;
    const timesForThisDate = state.availableTimes.find(
      (item) =>
        new Date(item.date).toDateString() ===
        new Date(selectedDate).toDateString()
    );

    if (timesForThisDate && timesForThisDate.times.length > 0) {
      return {
        ...state,
        selectedDate: selectedDate,
      };
    } else {
      newTimes = fetchAPI(new Date(selectedDate));
    }
    return {
      ...state,
      selectedDate: selectedDate,
      availableTimes: [
        ...state.availableTimes,
        { date: selectedDate, times: newTimes },
      ],
    };
  }

  return state;
};

function BookingsProvider({ children }: { children: JSX.Element }) {
  //state
  const [state, dispatch] = useReducer(bookingsReducer, initializeState());

  //value
  const bookingsCtx = { state, dispatch };

  return (
    <BookingsContext.Provider value={bookingsCtx}>
      {children}
    </BookingsContext.Provider>
  );
}

export { BookingsProvider };
