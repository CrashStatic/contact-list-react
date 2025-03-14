import React from "react";
import './Button.css';
import {ButtonProps} from "../../types/types";

export default function Button({children, ariaLabel, className, ...props}: ButtonProps) {
  return (
    <button {...props} aria-label={ariaLabel} className={className}>{children}</button>
  )
}
