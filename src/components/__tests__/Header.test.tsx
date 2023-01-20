import Header from "../Header/Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const setup = () => {
  render(<Header />);
};

describe("header", () => {
  test("renders a brand that links to home", () => {
    setup();
    const brand = screen.getByRole("link", { name: /rzv/i });
    expect(brand).toHaveAttribute("href", "/#test");
  });
});
