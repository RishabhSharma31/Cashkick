import React from "react";
import { render, screen } from "@testing-library/react";
import Typography from "./index";

describe("Typography Component", () => {
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

  test("applies the correct CSS design class", () => {
    render(<Typography text="Styled Text" cssDesign="custom-class" />);
    const textElement = screen.getByText(/styled text/i);
    expect(textElement).toHaveClass("typography custom-class");
  });

  test("renders with both variant and custom CSS", () => {
    render(<Typography text="Combined Style" variant="h2" cssDesign="custom-class" />);
    const textElement = screen.getByText(/combined style/i);
    expect(textElement).toHaveClass("MuiTypography-h2");
    expect(textElement).toHaveClass("typography custom-class");
  });
});
