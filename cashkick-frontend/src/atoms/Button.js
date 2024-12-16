import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttonText, onClickEvent, cssDesign }) => {
  return (
    <button className={`button ${cssDesign}`} onClick={onClickEvent}>
      {buttonText}
    </button>
  );
};

// Define prop types for the Button component
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClickEvent: PropTypes.func.isRequired,
  cssDesign: PropTypes.string,
};

// Default props for the Button component
Button.defaultProps = {
  cssDesign: "",
};

export default Button;
