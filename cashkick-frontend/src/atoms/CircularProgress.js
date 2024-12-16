import React from "react";
import PropTypes from "prop-types";
import "./CircularProgress.css";

const CircularProgress = ({ percentage, cssDesign }) => {
  const radius = 50; // Radius of the circle
  const stroke = 10; // Stroke width
  const normalizedRadius = radius - stroke / 2; // Adjust for the stroke width
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      className={`circular-progress ${cssDesign}`}
      height={radius * 2}
      width={radius * 2}
    >
      {/* Background Circle */}
      <circle
        stroke="#e6e6e6"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      {/* Progress Circle */}
      <circle
        stroke="#007bff"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
      />
      {/* Percentage Label */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="1.2rem"
        fill="#333"
      >
        {percentage}%
      </text>
    </svg>
  );
};

// Define prop types for the CircularProgress component
CircularProgress.propTypes = {
  percentage: PropTypes.number.isRequired, // Completion percentage from parent
  cssDesign: PropTypes.string, // Additional CSS classes for styling
};

// Default props for the CircularProgress component
CircularProgress.defaultProps = {
  cssDesign: "",
};

export default CircularProgress;
