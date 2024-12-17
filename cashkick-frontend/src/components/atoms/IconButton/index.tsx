import React from "react";
import Button from "@mui/material/Button";
import { ReactNode } from "react";

export interface IconButtonProps {
  icon: ReactNode; // Icon component or element
  onClick?: () => void;
  buttonText: string;
}

const IconButtonComponent: React.FC<IconButtonProps> = ({ icon, buttonText, onClick }) => {
  return (
    <Button variant="outlined" startIcon={icon} onClick={onClick}>
        {buttonText}
    </Button>
  );
};

export default IconButtonComponent;
