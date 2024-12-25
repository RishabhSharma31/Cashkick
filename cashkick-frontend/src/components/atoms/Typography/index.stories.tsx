import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Typography, { TypographyProps } from "./index";

export default {
  title: "Components/Atoms/Typography",
  component: Typography,
  argTypes: {
    text: { control: 'text', description: 'Text content to display' },
    variant: { 
      control: { 
        type: 'select', 
        options: ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button"]
      }, 
      description: 'Typography variant'
    },
  },
} as Meta;

const Template: StoryFn<TypographyProps> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Sample Text",
  variant: "body1",
};

export const Seeder = Template.bind({});
Seeder.args = {
  text: "Seeder",
  variant: "h1",
};