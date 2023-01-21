import { render, screen } from "@testing-library/react";
import WorkSection from "components/WorkSection/WorkSection";

const setup = () => {
  render(<WorkSection />);
};

describe("work section", () => {
  test("if it renders a heading", () => {
    setup();
    const heading = screen.getByText(/some of my latest work/i);
    expect(heading).toBeInTheDocument();
  });

  test("if it renders an all button", () => {
    setup();
    const allButton = screen.getByRole("button", { name: /all/i });
    expect(allButton).toBeInTheDocument();
  });

  test("if it renders a web development button", () => {
    setup();
    const webDevButton = screen.getByRole("button", {
      name: /web development/i,
    });
    expect(webDevButton).toBeInTheDocument();
  });

  test("if it renders a ui/ux design button", () => {
    setup();
    const uiUxButton = screen.getByRole("button", { name: /ui\/ux design/i });
    expect(uiUxButton).toBeInTheDocument();
  });
});
