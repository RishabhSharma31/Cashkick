import React from "react";
import { Typography as MuiTypography } from "@mui/material";

export interface TypographyProps {
  text: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button";
}

const Typography: React.FC<TypographyProps> = ({ text, variant = "body1" }) => {
  return <MuiTypography variant={variant}>{text}</MuiTypography>;
};

export default Typography;
