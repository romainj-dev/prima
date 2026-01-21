import React, { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  color?: "primary";
  size?: "small" | "medium";
  fullWidth?: boolean;
  isLoading?: boolean;
  stretchHeight?: boolean;
}

function ButtonComponent(
  {
    className,
    variant = "solid",
    color = "primary",
    size = "medium",
    fullWidth = false,
    isLoading = false,
    stretchHeight = false,
    children,
    disabled,
    ...props
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      className={clsx(
        styles.button,
        styles[variant],
        styles[color],
        styles[size],
        fullWidth && styles.fullWidth,
        stretchHeight && styles.stretchHeight,
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span style={{ marginRight: "8px" }}>Loading...</span>
      ) : null}
      {children}
    </button>
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ButtonComponent,
);

Button.displayName = "Button";
