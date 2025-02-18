import React from "react";
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string;
  children: React.ReactNode;
}

export default function Button({children, ariaLabel, className, ...props}: ButtonProps) {
  return (
    <button {...props} aria-label={ariaLabel} className={className}>{children}</button>
  )
}
