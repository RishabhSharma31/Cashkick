import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonComponent, { ButtonProps } from "./index";
import '@testing-library/jest-dom';

describe('ButtonComponent', () => {
  const defaultProps: ButtonProps = {
    buttonText: "Click Me",
    onClickEvent: jest.fn(),
    propVariant: "contained",
    type: "contained"
  };

  it('renders correctly with default props', () => {
    render(<ButtonComponent {...defaultProps} />);
    expect(screen.getByText(defaultProps.buttonText)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.buttonText)).toHaveClass("MuiButton-root"); 
    expect(screen.getByText(defaultProps.buttonText)).toHaveClass("MuiButton-containedPrimary");
  });

  it('handles onClickEvent', () => {
    render(<ButtonComponent {...defaultProps} />);
    fireEvent.click(screen.getByText(defaultProps.buttonText));
    expect(defaultProps.onClickEvent).toHaveBeenCalled();
  });

  it('applies different variant correctly', () => {
    render(<ButtonComponent {...defaultProps} propVariant="outlined" />);
    expect(screen.getByText(defaultProps.buttonText)).toHaveClass("MuiButton-root"); 
    expect(screen.getByText(defaultProps.buttonText)).toHaveClass("MuiButton-outlinedPrimary");
  });

  it('displays correct text', () => {
    render(<ButtonComponent type="contained" buttonText="Test Button" onClickEvent={jest.fn()} />);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ButtonComponent {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
