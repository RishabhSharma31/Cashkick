import React from "react";
import { Button, styled } from "@mui/material";

export interface ButtonProps {
  buttonText: string;
  onClickEvent: () => void;
  propVariant?: "text" | "outlined" | "contained";
  type: "outline" | "contained" | "reset";
}

const OutlineButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.common.white, 
  color: theme.palette.common.white,
  backgroundColor: 'transparent', 
  textTransform: 'none',
  borderRadius: '12px',
}));

const ContainedButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.secondary.main, 
  color: theme.palette.common.white, 
  backgroundColor: theme.palette.secondary.main, 
  textTransform: 'none',
  borderRadius: '12px',
}));

const ResetButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.background.paper, 
  color: theme.palette.common.white, 
  backgroundColor: theme.palette.background.paper, 
  textTransform: 'none',
  borderRadius: '12px',
}));

const ButtonComponent: React.FC<ButtonProps> = ({
  buttonText,
  onClickEvent,
  propVariant = "contained",
  type
}) => {

  if(type == "outline"){
    return (
      <OutlineButton 
      variant={propVariant}
      onClick={onClickEvent}>
        {buttonText}
      </OutlineButton>
    );
  }

  if(type == "contained"){
    return (
      <ContainedButton 
      variant={propVariant}
      onClick={onClickEvent}>
        {buttonText}
      </ContainedButton>
    );
  }
  if(type == "reset"){
    return (
      <ResetButton 
      variant={propVariant}
      onClick={onClickEvent}>
        {buttonText}
      </ResetButton>
    );
  }

  return (
    <Button
      variant={propVariant}
      onClick={onClickEvent}
    >
      {buttonText}
    </Button>
  );
};

export default ButtonComponent;