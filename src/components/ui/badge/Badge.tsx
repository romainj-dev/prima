import React, { HTMLAttributes, forwardRef, CSSProperties } from "react";
import clsx from "clsx";
import styles from "./Badge.module.scss";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  bgVar: string;
  colorVar: string;
}

function BadgeComponent(
  { className, children, bgVar, colorVar, style, ...props }: BadgeProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) {
  return (
    <span
      ref={ref}
      className={clsx(styles.badge, className)}
      style={
        {
          "--badge-bg": `var(${bgVar})`,
          "--badge-color": `var(${colorVar})`,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </span>
  );
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(BadgeComponent);

Badge.displayName = "Badge";
