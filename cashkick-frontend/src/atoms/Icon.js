import React from "react";
import PropTypes from "prop-types";

const Icon = ({ iconPath, cssDesign }) => {
  return <img src={iconPath} alt="icon" className={`icon ${cssDesign}`} />;
};

Icon.propTypes = {
  iconPath: PropTypes.string.isRequired,
  cssDesign: PropTypes.string,
};

Icon.defaultProps = {
  cssDesign: "",
};

export default Icon;
