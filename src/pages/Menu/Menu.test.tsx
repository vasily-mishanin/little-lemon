import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Menu";

describe("Menu Page", () => {
  test("Renders Page Heading", () => {
    render(<Menu />, { wrapper: BrowserRouter });
    const headingElement = screen.getByText(/menu/i);
    expect(headingElement).toBeInTheDocument();
  });
});
