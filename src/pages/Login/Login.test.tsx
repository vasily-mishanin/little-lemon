import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

describe("Login Page", () => {
  test("Renders Page Heading", () => {
    render(<Login />, { wrapper: BrowserRouter });
    const headingElement = screen.getByText(/login/i);
    expect(headingElement).toBeInTheDocument();
  });
});
