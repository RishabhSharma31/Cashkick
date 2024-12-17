import React from "react";
import { Button } from '@mui/material';

export interface ButtonProps {
  buttonText: string; 
  onClickEvent: () => void;
  propVariant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
}

const ButtonComponent: React.FC<ButtonProps> = ({ buttonText, onClickEvent, propVariant = "contained", color }) => {
  return (
    <Button variant={propVariant} onClick={onClickEvent} color={color}>
      {buttonText}
    </Button>
  );
};

export default ButtonComponent;
