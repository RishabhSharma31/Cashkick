import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CreditDetailsCard, { CreditDetailsCardProps } from "./index";

export default {
  title: "Components/CreditDetailsCard",
  component: CreditDetailsCard,
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

const Template: StoryFn<CreditDetailsCardProps> = (args) => <CreditDetailsCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  termCap: "12 months",
  availableCredit: "$50,000",
  maxInterestRate: "5%",
};

export const CustomData = Template.bind({});
CustomData.args = {
  termCap: "24 months",
  availableCredit: "$100,000",
  maxInterestRate: "3%",
};
