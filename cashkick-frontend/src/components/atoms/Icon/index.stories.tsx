import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Icon, { IconProps } from "./index";
import DeleteIcon from '@mui/icons-material/Delete';
// import IconSvg from './icon.svg';
//cant import this file even though its in the same folder

export default {
  title: "Components/Atoms/Icon",
  component: Icon,
  argTypes: {
    iconPath: { control: "text", description: "Path to the icon or inline SVG" },
    cssDesign: { control: "text", description: "Custom CSS class for styling" },
  },
} as Meta;

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconPath: '<svg data-testid="svg-icon"><circle cx="50" cy="50" r="40" /></svg>',
  cssDesign: "default-icon",
};

export const InlineSvg = Template.bind({});
InlineSvg.args = {
  iconPath: <DeleteIcon />,
  cssDesign: "svg-icon",
};
