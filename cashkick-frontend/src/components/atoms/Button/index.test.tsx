import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonComponent, { ButtonProps } from "./index"; // Adjust import path as needed
import '@testing-library/jest-dom';

describe('ButtonComponent', () => {
  const defaultProps: ButtonProps = {
    buttonText: "Click Me",
    onClickEvent: jest.fn(),
    propVariant: "contained",
    color: "primary"
  };

  it('renders correctly with default props', () => {
    render(<ButtonComponent {...defaultProps} />);
    expect(screen.getByText(defaultProps.buttonText)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveAttribute('variant', 'contained');
    expect(screen.getByRole('button')).toHaveAttribute('color', 'primary');
  });

  it('handles onClickEvent', () => {
    render(<ButtonComponent {...defaultProps} />);
    fireEvent.click(screen.getByText(defaultProps.buttonText));
    expect(defaultProps.onClickEvent).toHaveBeenCalled();
  });

  it('applies different variant correctly', () => {
    render(<ButtonComponent {...defaultProps} propVariant="outlined" />);
    expect(screen.getByRole('button')).toHaveAttribute('variant', 'outlined');
  });

  it('applies different color correctly', () => {
    render(<ButtonComponent {...defaultProps} color="success" />);
    expect(screen.getByRole('button')).toHaveAttribute('color', 'success');
  });

  it('displays correct text', () => {
    render(<ButtonComponent buttonText="Test Button" onClickEvent={jest.fn()} />);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ButtonComponent {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
