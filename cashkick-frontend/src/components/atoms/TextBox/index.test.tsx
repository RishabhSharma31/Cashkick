import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputText, { InputTextProps } from "./index";
import "@testing-library/jest-dom";

describe("InputText Component", () => {
  const mockOnChange = jest.fn();

  const setup = (props: Partial<InputTextProps> = {}) => {
    const defaultProps: InputTextProps = {
      value: "",
      onChange: mockOnChange,
      placeholder: "Enter text",
      ...props,
    };
    return render(<InputText {...defaultProps} />);
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the text field with the correct placeholder", () => {
    setup();
    const input = screen.getByLabelText("Enter text");
    expect(input).toBeInTheDocument();
  });

  it("displays the correct initial value", () => {
    setup({ value: "Initial value" });
    const input = screen.getByDisplayValue("Initial value");
    expect(input).toBeInTheDocument();
  });

  it("calls onChange when the input value changes", () => {
    setup();
    const input = screen.getByLabelText("Enter text");

    fireEvent.change(input, { target: { value: "New value" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith("New value");
  });

  it("renders without crashing when optional props are not provided", () => {
    render(
      <InputText
        value=""
        onChange={mockOnChange}
        placeholder="Placeholder text"
      />
    );
    const input = screen.getByLabelText("Placeholder text");
    expect(input).toBeInTheDocument();
  });
});
