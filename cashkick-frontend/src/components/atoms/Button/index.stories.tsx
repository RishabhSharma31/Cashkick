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
    color: {
      control: "select",
      options: ["inherit", "primary", "secondary", "success", "error", "info", "warning"],
      defaultValue: "primary",
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
  color: "primary",
};

// NewCashkick Example Story
export const NewCashkick = Template.bind({});
NewCashkick.args = {
  buttonText: "New Cash Kick",
  propVariant: "contained",
  customColor: "#6C5DD3",
};

// Review Your Credit Button Story
export const ReviewCredit = Template.bind({});
ReviewCredit.args = {
  buttonText: "Review Your Credit",
  propVariant: "contained",
  customColor: "#6C5DD3",
};

// Submit Your Credit Button Story
export const SubmitCredit = Template.bind({});
SubmitCredit.args = {
  buttonText: "Submit Your Credit",
  propVariant: "contained",
  customColor: "#6C5DD3",
};

// Create Cash Kick Button Story
export const CreateCashkick = Template.bind({});
CreateCashkick.args = {
  buttonText: "Create Cash Kick",
  propVariant: "contained",
  customColor: "#6C5DD3",
};

// Cancel Button Story
export const Cancel = Template.bind({});
Cancel.args = {
  buttonText: "Cancel",
  propVariant: "text",
  customColor: "#2D2D30",
};