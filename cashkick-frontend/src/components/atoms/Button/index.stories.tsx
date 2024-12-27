import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ButtonComponent, { ButtonProps } from "./index";
import { BUTTON_LABELS } from '../../../Constants';

export default {
  title: "Components/ButtonComponent",
  component: ButtonComponent,
  argTypes: {
    buttonText: { control: "text", defaultValue: BUTTON_LABELS.submit },
    propVariant: {
      control: "select",
      options: ["text", "outlined", "contained"],
      defaultValue: "contained",
    },
    onClickEvent: { action: "clicked" },
  },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <ButtonComponent {...args} />;

// Learn more button
export const LearnMore = Template.bind({});
LearnMore.args = {
  buttonText: BUTTON_LABELS.learnMore,
  propVariant: "outlined",
  type: "outline",
};

// NewCashkick Example Story
export const NewCashkick = Template.bind({});
NewCashkick.args = {
  buttonText: BUTTON_LABELS.newCashKick,
  propVariant: "contained",
  type: "contained",
};

// Review Your Credit Button Story
export const ReviewCredit = Template.bind({});
ReviewCredit.args = {
  buttonText: BUTTON_LABELS.reviewCredit,
  propVariant: "contained",
  type: "contained",
};

// Submit Your Credit Button Story
export const SubmitCredit = Template.bind({});
SubmitCredit.args = {
  buttonText: BUTTON_LABELS.submitCredit,
  propVariant: "contained",
  type: "contained",
};

// Create Cash Kick Button Story
export const CreateCashkick = Template.bind({});
CreateCashkick.args = {
  buttonText: BUTTON_LABELS.createCashKick,
  propVariant: "contained",
  type: "contained",
};

// Cancel Button Story
export const Cancel = Template.bind({});
Cancel.args = {
  buttonText: BUTTON_LABELS.cancel,
  propVariant: "text",
  type: "reset",
};