import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import OrderOnline from "./OrderOnline";

describe("OrderOnline Page", () => {
  test("Renders Page Heading", () => {
    render(<OrderOnline />, { wrapper: BrowserRouter });
    const headingElement = screen.getByText(/online/i);
    expect(headingElement).toBeInTheDocument();
  });
});
