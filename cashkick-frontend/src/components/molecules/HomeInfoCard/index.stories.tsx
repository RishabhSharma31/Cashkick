import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import DueOutstandingCard, { DueOutstandingCardProps } from "./index";

export default {
  title: "Components/DueOutstandingCard",
  component: DueOutstandingCard,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#1C1C28" },
        { name: "light", value: "#FFFFFF" },
      ],
    },
  },
} as Meta;

const Template: StoryFn<DueOutstandingCardProps> = (args) => <DueOutstandingCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  dueDate: "2024-12-31",
  dueAmount: "$5,000",
  outstandingAmount: "$2,000",
  dueInDays: "5 days",
  progressValue: 40,
};

export const HighProgress = Template.bind({});
HighProgress.args = {
  dueDate: "2024-12-31",
  dueAmount: "$10,000",
  outstandingAmount: "$1,000",
  dueInDays: "2 days",
  progressValue: 80,
};

export const LowProgress = Template.bind({});
LowProgress.args = {
  dueDate: "2025-01-10",
  dueAmount: "$15,000",
  outstandingAmount: "$10,000",
  dueInDays: "10 days",
  progressValue: 20,
};
