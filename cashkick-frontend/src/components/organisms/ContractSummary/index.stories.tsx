import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SummaryCard, { SummaryCardProps } from './index';

export default {
  title: 'Organisms/SummaryCard',
  component: SummaryCard,
} as Meta;

const Template: StoryFn<SummaryCardProps> = (args) => <SummaryCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  term: '12 months',
  selectedContracts: 3,
  sliderValue: 283442.64,
  maxAmount: '$880,000.00',
  payBackAmount: '$288,003.30',
  ratePercentage: '12.00%',
  rateAmount: '$34,560.56',
  totalPayout: '$253,442.50',
  onSliderChange: (value) => console.log('Slider value changed:', value),
  onReset: () => console.log('Reset clicked'),
  onReview: () => console.log('Review clicked'),
} as SummaryCardProps;
