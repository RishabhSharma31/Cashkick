import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import IconButtonComponent from "./index";
import { Icon } from "@mui/material";

describe("IconButtonComponent", () => {
  test("renders the button with the correct text", () => {
    render(<IconButtonComponent buttonText="Click Me" icon={<Icon>add</Icon>} />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders the button with an icon", () => {
    render(<IconButtonComponent buttonText="Icon Button" icon={<Icon data-testid="icon">add</Icon>} />);
    const iconElement = screen.getByTestId("icon");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveTextContent("add");
  });

  test("calls the `onClick` handler when clicked", () => {
    const handleClick = jest.fn();
    render(<IconButtonComponent buttonText="Click Me" icon={<Icon>add</Icon>} onClick={handleClick} />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders the button with the outlined variant", () => {
    render(<IconButtonComponent buttonText="Outlined Button" icon={<Icon>add</Icon>} />);
    const buttonElement = screen.getByRole("button", { name: /outlined button/i });
    expect(buttonElement).toHaveClass("MuiButton-outlined");
  });
});
