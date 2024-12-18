import React from "react";
import { Button } from "@mui/material";

export interface ButtonProps {
  buttonText: string;
  onClickEvent: () => void;
  propVariant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | string; 
  customColor?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  buttonText,
  onClickEvent,
  propVariant = "contained",
  color,
  customColor,
}) => {
  const buttonStyles = customColor
    ? {
        backgroundColor: customColor,
        color: "#fff", // Adjust as necessary for contrast
        "&:hover": {
          backgroundColor: `${customColor}CC`, // Slightly transparent for hover effect
        },
      }
    : undefined;

  return (
    <Button
      variant={propVariant}
      onClick={onClickEvent}
      color={color as any} // Cast to allow MUI color variants or use `sx` for styles
      sx={buttonStyles}
    >
      {buttonText}
    </Button>
  );
};

export default ButtonComponent;

