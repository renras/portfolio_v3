import ContactSection from "components/ContactSection/ContactSection";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToastContainer } from "react-toastify";

jest.mock("@emailjs/browser", () => ({
  sendForm: jest.fn(),
}));

const setup = () => {
  render(
    <div>
      <ToastContainer />
      <ContactSection />
    </div>
  );
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

  test("if it renders an image of a user sending an email", () => {
    setup();
    const emailImage = screen.getByRole("img", {
      name: /user sending an email/i,
    });
    expect(emailImage).toBeInTheDocument();
  });

  test("if it renders my phone number", () => {
    setup();
    const phoneNumber = screen.getByText(/[+]63 945 582 0565/i);
    expect(phoneNumber).toBeInTheDocument();
  });

  test("if it renders my email address", () => {
    setup();
    const emailAddress = screen.getByText(/renzovisperas07@gmail.com/i);
    expect(emailAddress).toBeInTheDocument();
  });

  test("if it renders a warning toast message when submitting a form with an empty field", async () => {
    setup();
    const sendMessageButton = screen.getByRole("button", {
      name: /send message/i,
    });
    userEvent.click(sendMessageButton);
    const toastMessage = await screen.findByText(
      /please fill up all the fields/i
    );
    expect(toastMessage).toBeInTheDocument();
  });

  test("if it renders a success toast message when submitting a form with all the fields filled up", async () => {
    setup();
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByLabelText(/email/i);
    const subjectInput = screen.getByRole("textbox", { name: /subject/i });
    const messageInput = screen.getByRole("textbox", { name: /message/i });
    const sendMessageButton = screen.getByRole("button", {
      name: /send message/i,
    });

    userEvent.type(nameInput, "Renzovisperas");
    userEvent.type(emailInput, "renzovisperas07@gmail.com");
    userEvent.type(subjectInput, "Hello");
    userEvent.type(messageInput, "Hello World");
    userEvent.click(sendMessageButton);

    const toastMessage = await screen.findByText(/message sent successfully/i);
    expect(toastMessage).toBeInTheDocument();
  });
});
