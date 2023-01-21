import { render, screen } from "@testing-library/react";
import AboutMeSection from "../AboutMeSection/AboutMeSection";

const setup = () => {
  render(<AboutMeSection />);
};

describe("about me section", () => {
  test("if it renders a heading", () => {
    setup();
    const heading = screen.getByRole("heading", { name: /about me/i });
    expect(heading).toBeInTheDocument();
  });

  test("if it renders an img of a user typing on a keyboard", () => {
    setup();
    const image = screen.getByRole("img", {
      name: /user typing on a keyboard/i,
    });
    expect(image).toBeInTheDocument();
  });
});
