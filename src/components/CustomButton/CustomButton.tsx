import React from "react";
import PropTypes from "prop-types";
import "./customButton.scss";

export interface CustomButtonProps {
  label: string;
}

const propTypes = {
  label: PropTypes.string,
};

export default function CustomButton({ label }: CustomButtonProps) {
  return <button className="lib-button">{label}</button>;
}

CustomButton.prototypes = propTypes;
