import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import IconButtonComponent, { IconButtonProps } from "./index";
import Icon from '@mui/material/Icon';
import { HomeOutlined, Paid } from '@mui/icons-material';


export default {
  title: "Components/Atoms/IconButtonComponent",
  component: IconButtonComponent,
  argTypes: {
    icon: { control: 'text', description: 'Icon as a string or Icon component' },
    buttonText: { control: 'text', description: 'Button text' },
    onClick: { action: 'buttonClicked', description: 'Handler for button click' },
  },
} as Meta;

const Template: StoryFn<IconButtonProps> = (args) => <IconButtonComponent {...args} />;

export const Home = Template.bind({});
Home.args = {
  icon: <HomeOutlined />,
  buttonText: "Hone",
  onClick: () => console.log('Button clicked'),
};

export const CashAcceleration = Template.bind({});
CashAcceleration.args = {
  icon: <Paid />,
  buttonText: "Cash Acceleration",
  onClick: () => console.log('Button clicked'),
};