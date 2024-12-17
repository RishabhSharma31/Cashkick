import React, { ReactNode, ReactElement, ReactPortal } from "react";
import { SvgIcon } from '@mui/material';

export interface IconProps {
  iconPath?: string | ReactNode; 
  cssDesign?: string;  
};

const Icon: React.FC<IconProps> = ({ iconPath, cssDesign }) => {

  if (React.isValidElement(iconPath)) {
    return iconPath;
  }

  if (typeof iconPath === "string") {
    return (
      <SvgIcon
        className={`icon ${cssDesign}`}
        component="div">
          <div dangerouslySetInnerHTML={{ __html: iconPath }} />
      </SvgIcon>
    );
  }

  return null;
};

export default Icon;
