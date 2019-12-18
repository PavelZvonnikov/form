import React from "react";

export const Button = ({ disabled, text, onClick, className }) => (
  <button
    type="button"
    disabled={disabled}
    className={`btn ${className || ""}`}
    onClick={onClick}
  >
    {text}
  </button>
);
