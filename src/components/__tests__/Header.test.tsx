import Header from "../Header/Header";
import { render, screen } from "@testing-library/react";

const setup = () => {
  render(<Header />);
};

describe("header", () => {
  test("if it renders a brand that links to home", () => {
    setup();
    const brand = screen.getByRole("link", { name: /rzv/i });
    expect(brand).toHaveAttribute("href", "/#home");
  });

  test("if it renders a link to home", () => {
    setup();
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toHaveAttribute("href", "/#home");
  });

  test("if it renders an about link", () => {
    setup();
    const aboutLink = screen.getByRole("link", { name: /about/i });
    expect(aboutLink).toHaveAttribute("href", "/#about");
  });

  test("if it renders a contact link", () => {
    setup();
    const contactLink = screen.getByRole("link", { name: /contact/i });
    expect(contactLink).toHaveAttribute("href", "/#contact");
  });
});
