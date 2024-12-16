import React from "react";
import PropTypes from "prop-types";

const Typography = ({ text, cssDesign, variant }) => {
  const Tag = variant || "p";

  return <Tag className={`typography ${cssDesign}`}>{text}</Tag>;
};

Typography.propTypes = {
  text: PropTypes.string.isRequired,
  cssDesign: PropTypes.string,
  variant: PropTypes.string,
};

Typography.defaultProps = {
  cssDesign: "",
  variant: "p",
};

export default Typography;
