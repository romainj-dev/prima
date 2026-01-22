import React, { ComponentPropsWithoutRef, CSSProperties } from "react"
import clsx from "clsx"
import styles from "./Badge.module.scss"

interface BadgeBaseProps {
  bgVar: string
  colorVar: string
  looksDisabled?: boolean
}

type BadgeSpanProps = BadgeBaseProps & ComponentPropsWithoutRef<"span">
type BadgeButtonProps = BadgeBaseProps & ComponentPropsWithoutRef<"button">

export type BadgeProps = BadgeSpanProps | BadgeButtonProps

export function Badge({
  className,
  children,
  bgVar,
  colorVar,
  style,
  looksDisabled,
  ...props
}: BadgeProps) {
  const isButton = typeof props.onClick === "function"
  const Component = isButton ? "button" : "span"
  const { type, ...restProps } = props as BadgeButtonProps

  return (
    <Component
      className={clsx(
        styles.badge,
        className,
        looksDisabled && styles.looksDisabled,
        props.onClick && styles.clickable,
      )}
      style={
        {
          "--badge-bg": `var(${bgVar})`,
          "--badge-color": `var(${colorVar})`,
          ...style,
        } as CSSProperties
      }
      {...(isButton ? { type: type ?? "button" } : {})}
      {...(restProps as ComponentPropsWithoutRef<"span">)}
    >
      {children}
    </Component>
  )
}
