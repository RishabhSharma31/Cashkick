import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CashKickCard, { CashKickCardProps } from './index';

export default {
  title: 'Organisms/CashKickCard',
  component: CashKickCard,
  argTypes: {
    onButtonClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<CashKickCardProps> = (args) => <CashKickCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Launch a new Cash Kick',
  description: 'You have up to {amount} available for a new cash advance.',
  amount: '$880,000.00',
  buttonText: 'New Cash Kick',
};
