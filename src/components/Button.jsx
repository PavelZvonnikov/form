import React from 'react'

export const Button = ({
  disabled,
  text,
  onClick,
  className,
}) => (
  <button
    type="button"
    disabled={disabled}
    className={`btn btn-light mr-4 ${className || ''}`}
    onClick={onClick}
  >
    {text}
  </button>
)
