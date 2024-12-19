import React from "react";
import { render, screen } from "@testing-library/react";
import Typography from "./index";

describe("Typography Component", () => {
  const buttonStyle = {
    color: "#A0A3BD",
    fontSize: "0.875rem",
    fontWeight: "500",
  }

  test("renders the text correctly", () => {
    render(<Typography text="Hello World" />);
    const textElement = screen.getByText(/hello world/i);
    expect(textElement).toBeInTheDocument();
  });

  test("applies the correct variant", () => {
    render(<Typography text="Heading Text" variant="h1" />);
    const textElement = screen.getByText(/heading text/i);
    expect(textElement).toHaveClass("MuiTypography-h1");
  });

  test("uses the default variant when none is provided", () => {
    render(<Typography text="Default Text" />);
    const textElement = screen.getByText(/default text/i);
    expect(textElement).toHaveClass("MuiTypography-body1");
  });

  test("applies custom CSS styles correctly", () => {
    render(<Typography text="Default Text" cssDesign={buttonStyle} />);
    const typographyElement = screen.getByText("Default Text");
    expect(typographyElement).toHaveStyle({
      color: "#A0A3BD",
      fontSize: "0.875rem",
      fontWeight: "500",
    });
  });
});
