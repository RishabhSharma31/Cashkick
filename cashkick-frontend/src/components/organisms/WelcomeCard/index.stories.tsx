import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import WelcomeCard, { WelcomeCardProps } from './index';

export default {
  title: 'Organisms/FundingCard',
  component: WelcomeCard,
  argTypes: {
    customColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<WelcomeCardProps> = (args) => <WelcomeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Congratulations you are ready to start!',
  description: 'You are approved for funding. We are ready to advance you upto',
  amount: '$8.8M',
  onButtonClick: () => alert('Learn More clicked!'),
};
