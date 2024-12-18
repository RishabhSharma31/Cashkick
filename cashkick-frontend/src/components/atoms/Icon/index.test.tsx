import React from "react";
import { render, screen } from "@testing-library/react";
import Icon from "./index";
import '@testing-library/jest-dom';

describe("Icon Component", () => {
  test("renders a ReactNode when a valid React element is passed as `iconPath`", () => {
    const customIcon = <div data-testid="custom-icon">Custom Icon</div>;

    render(<Icon iconPath={customIcon} cssDesign="custom-css" />);

    const renderedIcon = screen.getByTestId("custom-icon");
    expect(renderedIcon).toBeInTheDocument();
    expect(renderedIcon).toHaveTextContent("Custom Icon");
  });

  test("renders an SVG element when a string is passed as `iconPath`", () => {
    const svgPath = '<svg data-testid="svg-icon"><circle cx="50" cy="50" r="40" /></svg>';

    render(<Icon iconPath={svgPath} cssDesign="svg-css" />);

    const svgIcon = screen.getByTestId("svg-icon");
    expect(svgIcon).toBeInTheDocument();
    expect(svgIcon).toContainHTML('<circle cx="50" cy="50" r="40"></circle>');
  });

  test("returns null when `iconPath` is neither a valid React element nor a string", () => {
    const { container } = render(<Icon iconPath={123} cssDesign="invalid-css" />);
    expect(container.firstChild).toBeNull();
  });
});
