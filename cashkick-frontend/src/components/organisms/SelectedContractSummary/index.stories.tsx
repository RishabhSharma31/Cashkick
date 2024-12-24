import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SelectedContractSummaryCard, { SelectedContractCardProps } from './index';

export default {
  title: 'Organisms/SelectedContractSummaryCard',
  component: SelectedContractSummaryCard,
} as Meta;

const Template: StoryFn<SelectedContractCardProps> = (args) => <SelectedContractSummaryCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  term: '12 months',
  selectedContracts: 3,
  payBackAmount: '$288,003.30',
  ratePercentage: '12.00%',
  rateAmount: '$34,560.56',
  totalPayout: '$253,442.50',
  onSubmit: () => console.log('Review clicked'),
} as SelectedContractCardProps;
