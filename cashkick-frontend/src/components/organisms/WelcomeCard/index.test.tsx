import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WelcomeCard from './index';
import BackgroundSVG from './bkg.svg';

describe('WelcomeCard Component', () => {
  const mockProps = {
    title: 'Congratulations you are ready to start!',
    description: 'You are approved for funding. We are ready to advance you upto',
    amount: '$8.8M',
    buttonText: 'Learn More',
    onButtonClick: jest.fn(),
    backgroundImage: {BackgroundSVG},
    customColor: 'transparent',
    cssDesign: { borderRadius: '12px' },
  };

  it('renders the component with all props', () => {
    render(<WelcomeCard {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
    expect(screen.getByText(mockProps.amount)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: mockProps.buttonText })).toBeInTheDocument();
  });

  it('calls the onButtonClick function when button is clicked', () => {
    render(<WelcomeCard {...mockProps} />);
    const button = screen.getByRole('button', { name: mockProps.buttonText });
    fireEvent.click(button);
    expect(mockProps.onButtonClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom styles to the button', () => {
    render(<WelcomeCard {...mockProps} />);
    const button = screen.getByRole('button', { name: mockProps.buttonText });
    expect(button).toHaveStyle(`background-color: ${mockProps.customColor}`);
    expect(button).toHaveStyle('border-radius: 12px');
  });

  it('applies the background image', () => {
    render(<WelcomeCard {...mockProps} />);
    const card = screen.getByText(mockProps.title).parentElement;
    expect(card).toHaveStyle(`background-image: url(${mockProps.backgroundImage})`);
  });
});
