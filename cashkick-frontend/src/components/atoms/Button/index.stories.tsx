import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ButtonComponent, { ButtonProps } from "./index";

export default {
  title: "Components/ButtonComponent",
  component: ButtonComponent,
  argTypes: {
    buttonText: { control: "text", defaultValue: "Click Me" },
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
  buttonText: "Learn More",
  propVariant: "outlined",
  type: "outline",
};

// NewCashkick Example Story
export const NewCashkick = Template.bind({});
NewCashkick.args = {
  buttonText: "New Cash Kick",
  propVariant: "contained",
  type: "contained",
};

// Review Your Credit Button Story
export const ReviewCredit = Template.bind({});
ReviewCredit.args = {
  buttonText: "Review Your Credit",
  propVariant: "contained",
  type: "contained",
};

// Submit Your Credit Button Story
export const SubmitCredit = Template.bind({});
SubmitCredit.args = {
  buttonText: "Submit Your Credit",
  propVariant: "contained",
  type: "contained",
};

// Create Cash Kick Button Story
export const CreateCashkick = Template.bind({});
CreateCashkick.args = {
  buttonText: "Create Cash Kick",
  propVariant: "contained",
  type: "contained",
};

// Cancel Button Story
export const Cancel = Template.bind({});
Cancel.args = {
  buttonText: "Cancel",
  propVariant: "text",
  type: "reset",
};