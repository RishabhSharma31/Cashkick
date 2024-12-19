import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import InputText, { InputTextProps } from "./index";

export default {
  title: "Components/Atoms/InputText",
  component: InputText,
  argTypes: {
    cssDesign: { control: 'text', description: 'Custom CSS class for styling' },
    value: { control: 'text', description: 'Value of the input' },
    onChange: { action: 'valueChanged', description: 'Handler for value changes' },
    placeholder: { control: 'text', description: 'placeholder text' }
  },
} as Meta;

const Template: StoryFn<InputTextProps> = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  cssDesign: "",
  value: "",
  onChange: (value: string) => console.log(value),
  placeholder: "Ex: marketing expenses"
};
