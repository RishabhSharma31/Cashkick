import React from "react";
import { TextField } from "@mui/material";

export interface InputTextProps {
  cssDesign?: string; 
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const InputText: React.FC<InputTextProps> = ({ cssDesign = "", value, onChange, placeholder }) => {
  return (
    <TextField
      variant="outlined"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cssDesign}
      label={placeholder}
    />
  );
};

export default InputText;
