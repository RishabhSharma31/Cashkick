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
  iconPath: '<svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5711 0.788932C13.5527 0.0310729 12.2726 -0.193765 11.0568 0.170885L2.83311 2.63794C1.13894 3.14651 0 4.67604 0 6.44553V24.0224C0 25.2916 0.583888 26.4539 1.60214 27.2105C2.62059 27.9685 3.90214 28.1932 5.11648 27.8286L11.2555 25.9864C11.0635 25.3533 10.9663 24.6926 10.9663 24.0224V16.0399C10.9663 14.3637 11.5776 12.7627 12.6905 11.5347C13.5073 10.63 14.567 9.96257 15.7512 9.60623L16.1733 9.48565V3.97838C16.1733 2.70915 15.5894 1.54688 14.571 0.788932H14.5711Z" fill="#6C5DD3"/><path d="M29.8796 13.5727V21.5552C29.8796 23.3233 28.7419 24.8543 27.0465 25.3614L18.8228 27.8286C18.4418 27.9437 18.0539 27.9999 17.6701 27.9999C16.8298 27.9999 16.0075 27.7313 15.3084 27.2104C14.989 26.972 14.7122 26.6965 14.4847 26.3881C14.2078 26.018 14.0008 25.6055 13.8706 25.1627C13.8692 25.1627 13.8679 25.1627 13.8665 25.164L13.8692 25.1613C13.7638 24.7981 13.7062 24.4157 13.7062 24.0223V16.0399C13.7062 15.2202 13.9501 14.4513 14.3806 13.8126C14.811 13.1738 15.4277 12.664 16.1733 12.3611C16.2926 12.3131 16.4146 12.2691 16.5394 12.2323L17.5454 11.9307L24.7632 9.76512C25.9788 9.40047 27.2591 9.62531 28.2774 10.3833C29.2959 11.1412 29.8797 12.3035 29.8797 13.5727H29.8796Z" fill="#6C5DD3"/></svg>',
  cssDesign: "default-icon",
};

export const InlineSvg = Template.bind({});
InlineSvg.args = {
  iconPath: <DeleteIcon />,
  cssDesign: "svg-icon",
};
