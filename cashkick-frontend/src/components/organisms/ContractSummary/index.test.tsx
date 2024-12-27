import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SummaryCard, { SummaryCardProps } from './index';

const mockProps: SummaryCardProps = {
  term: '12 months',
  selectedContracts: 3,
  sliderValue: 283442.64,
  maxAmount: '$880,000.00',
  payBackAmount: '$288,003.30',
  ratePercentage: '12.00%',
  rateAmount: '$34,560.56',
  totalPayout: '$253,442.50',
  onSliderChange: jest.fn(),
  onReset: jest.fn(),
  onReview: jest.fn(),
};

describe('SummaryCard', () => {
  it('renders the component with provided props', () => {
    render(<SummaryCard {...mockProps} />);
    expect(screen.getByText('Summary')).toBeInTheDocument();
    expect(screen.getByText('12 months')).toBeInTheDocument();
    expect(screen.getByText('Selected contracts')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('Pay back amount')).toBeInTheDocument();
    expect(screen.getByText('$288,003.30')).toBeInTheDocument();
    expect(screen.getByText('Review Your Credit')).toBeInTheDocument();
  });

  it('calls onReset when the Reset button is clicked', () => {
    render(<SummaryCard {...mockProps} />);
    const resetButton = screen.getByText('Reset');
    fireEvent.click(resetButton);
    expect(mockProps.onReset).toHaveBeenCalled();
  });

  it('calls onReview when the Review Your Credit button is clicked', () => {
    render(<SummaryCard {...mockProps} />);
    const reviewButton = screen.getByText('Review Your Credit');
    fireEvent.click(reviewButton);
    expect(mockProps.onReview).toHaveBeenCalled();
  });
});
