import { render, screen } from "@testing-library/react";
import HeroSection from "../HeroSection/HeroSection";

const setup = () => {
  render(<HeroSection />);
};

describe("hero section", () => {
  test("if it renders my name", () => {
    setup();
    const name = screen.getByRole("heading", { name: /renzo visperas/i });
    expect(name).toBeInTheDocument();
  });

  test("if it renders my title", () => {
    setup();
    const title = screen.getByRole("heading", {
      name: /web developer with ui[/]ux expertise/i,
    });
    expect(title).toBeInTheDocument();
  });

  test("if it renders a link to my work", () => {
    setup();
    const workLink = screen.getByRole("link", { name: /see my work/i });
    expect(workLink).toHaveAttribute("href", "/#work");
  });

  test("if it renders a hero img", () => {
    setup();
    const heroImg = screen.getByRole("img", {
      name: /male programming on a computer/i,
    });
    expect(heroImg).toBeInTheDocument();
  });

  test("if it renders a link to my github profile", () => {
    setup();
    const githubLink = screen.getByRole("link", { name: /github profile/i });
    expect(githubLink).toHaveAttribute("href", "https://github.com/renras");
  });

  test("if it renders a link to my linkedin profile", () => {
    setup();
    const linkedinLink = screen.getByRole("link", {
      name: /linkedin profile/i,
    });
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/renzo-visperas-55353321a/"
    );
  });
});
