import ContactSection from "components/ContactSection/ContactSection";
import { render, screen } from "@testing-library/react";

const setup = () => {
  render(<ContactSection />);
};

describe("contact section", () => {
  test("if it renders a heading", () => {
    setup();
    const heading = screen.getByRole("heading", { name: /contact me/i });
    expect(heading).toBeInTheDocument();
  });

  test("if it renders a name input", () => {
    setup();
    const nameInput = screen.getByRole("textbox", { name: /email/i });
    expect(nameInput).toBeInTheDocument();
  });

  test("if it renders an email input", () => {
    setup();
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toBeInTheDocument();
  });

  test("if it renders a subject input", () => {
    setup();
    const subjectInput = screen.getByRole("textbox", { name: /subject/i });
    expect(subjectInput).toBeInTheDocument();
  });

  test("if it renders a message input", () => {
    setup();
    const messageInput = screen.getByRole("textbox", { name: /message/i });
    expect(messageInput).toBeInTheDocument();
  });

  test("if it renders a send message button", () => {
    setup();
    const sendMessageButton = screen.getByRole("button", {
      name: /send message/i,
    });
    expect(sendMessageButton).toBeInTheDocument();
  });
});
