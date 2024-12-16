import React from "react";
import PropTypes from "prop-types";

const InputText = ({ cssDesign, value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`text-input ${cssDesign}`}
      placeholder="Enter text here"
    />
  );
};

InputText.propTypes = {
  cssDesign: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputText.defaultProps = {
  cssDesign: "",
};

export default InputText;
