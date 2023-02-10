import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Specials heading", () => {
  render(<App />);
  const linkElement = screen.getByText(/specials/i);
  expect(linkElement).toBeInTheDocument();
});
