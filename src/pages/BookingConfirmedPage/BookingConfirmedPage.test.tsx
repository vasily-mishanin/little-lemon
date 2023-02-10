import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingConfirmedPage from "./BookingConfirmedPage";

describe("BookingConfirmedPage", () => {
  test("Renders Page Heading", () => {
    render(<BookingConfirmedPage />, { wrapper: BrowserRouter });
    const headingElement = screen.getByText(
      /You've successfully reserved a table/i
    );
    expect(headingElement).toBeInTheDocument();
  });
});
