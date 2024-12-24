import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CashKickCard from './index';

describe('CashKickCard Component', () => {
  const mockOnClick = jest.fn();

  const setup = () =>
    render(
      <CashKickCard
        title="Launch a new Cash Kick"
        description="You have up to {amount} available for a new cash advance."
        amount="$880,000.00"
        buttonText="New Cash Kick"
        onButtonClick={mockOnClick}
      />
    );

  it('renders the title', () => {
    setup();
    expect(screen.getByText('Launch a new Cash Kick')).toBeInTheDocument();
  });

  it('renders the interpolated description with amount', () => {
    setup();
    expect(
      screen.getByText('You have up to $880,000.00 available for a new cash advance.')
    ).toBeInTheDocument();
  });

  it('renders the button with correct text', () => {
    setup();
    expect(screen.getByRole('button', { name: 'New Cash Kick' })).toBeInTheDocument();
  });

  it('calls onButtonClick when the button is clicked', () => {
    setup();
    const button = screen.getByRole('button', { name: 'New Cash Kick' });
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('matches the snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
