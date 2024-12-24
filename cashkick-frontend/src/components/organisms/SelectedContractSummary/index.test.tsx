import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SelectedContractSummaryCard, { SelectedContractCardProps } from './index';

const mockProps: SelectedContractCardProps = {
  term: '12 months',
  selectedContracts: 3,
  payBackAmount: '$288,003.30',
  ratePercentage: '12.00%',
  rateAmount: '$34,560.56',
  totalPayout: '$253,442.50',
  onSubmit: jest.fn(),
};

describe('SelectedContractSummaryCard', () => {
  it('renders the component with provided props', () => {
    render(<SelectedContractSummaryCard {...mockProps} />);
    expect(screen.getByText('Summary')).toBeInTheDocument();
    expect(screen.getByText('12 months')).toBeInTheDocument();
    expect(screen.getByText('Selected contracts')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('Pay back amount')).toBeInTheDocument();
    expect(screen.getByText('$288,003.30')).toBeInTheDocument();
    expect(screen.getByText('Submit Your Credit')).toBeInTheDocument();
  });

  it('calls onSubmit when the Submit Your Credit button is clicked', () => {
    render(<SelectedContractSummaryCard {...mockProps} />);
    const submitButton = screen.getByText('Submit Your Credit');
    fireEvent.click(submitButton);
    expect(mockProps.onSubmit).toHaveBeenCalled();
  });
});
