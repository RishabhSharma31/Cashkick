import React from 'react';
import { Meta, StoryFn } from "@storybook/react";
import WelcomeCard, { WelcomeCardProps } from './index';
import { action } from '@storybook/addon-actions';
import { WELCOME_CARD } from '../../../Constants';

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
  title: WELCOME_CARD.title,
  description: WELCOME_CARD.description,
  amount: WELCOME_CARD.amount,
  onButtonClick: action('button-click'),
};
