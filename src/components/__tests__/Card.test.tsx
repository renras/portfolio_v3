import { render, screen } from "@testing-library/react";
import Card from "components/Card/Card";

const mockProject = {
  img: "https://i.imgur.com/8Q9QY7M.png",
  title: "Project Title",
  description: "Project Description",
  link: "https://www.google.com",
  category: "Web Development",
};

const setup = () => {
  render(<Card project={mockProject} />);
};

describe("card", () => {
  test("if it renders an image", () => {
    setup();
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });

  test("if it renders a title", () => {
    setup();
    const title = screen.getByText(/project title/i);
    expect(title).toBeInTheDocument();
  });

  test("if it renders a description", () => {
    setup();
    const description = screen.getByText(/project description/i);
    expect(description).toBeInTheDocument();
  });

  test("if it renders a button that links to project", () => {
    setup();
    const link = screen.getByRole("link", { name: /view project/i });
    expect(link).toHaveAttribute("href", "https://www.google.com");
  });
});
