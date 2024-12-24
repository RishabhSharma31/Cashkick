import React from "react";
import { Button } from "@mui/material";

export interface ButtonProps {
  buttonText: string;
  onClickEvent: () => void;
  propVariant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | string; 
  customColor?: string;
  cssDesign?: React.CSSProperties;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  buttonText,
  onClickEvent,
  propVariant = "contained",
  color,
  customColor,
  cssDesign
}) => {
  const buttonStyles = customColor
    ? {
        backgroundColor: customColor,
        color: "#fff", 
        "&:hover": {
          backgroundColor: `${customColor}CC`, 
        },
        ...cssDesign,
      }
    : cssDesign;

  return (
    <Button
      variant={propVariant}
      onClick={onClickEvent}
      color={color as any} 
      sx={buttonStyles}
    >
      {buttonText}
    </Button>
  );
};

export default ButtonComponent;

