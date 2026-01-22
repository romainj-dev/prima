import { HTMLAttributes, ElementType, CSSProperties } from "react"
import clsx from "clsx"
import styles from "./Text.module.scss"

type TextColor =
  | "primary"
  | "text"
  | "text-secondary"
  | "text-gray"
  | "text-white"
  | "text-input"

type TruncateProps =
  | { truncate?: false; lines?: never }
  | { truncate: true; lines?: number }

export interface TextPropsBase extends HTMLAttributes<HTMLElement> {
  size?:
    | "s"
    | "m"
    | "l"
    | "title-s"
    | "title-m"
    | "title-l"
    | "title-xl"
    | "title-xxl"
  weight?: "light" | "regular" | "medium"
  as?: ElementType
  htmlFor?: string
  color?: TextColor
  uppercase?: boolean
  underline?: boolean
}

export type TextProps = TextPropsBase & TruncateProps

export function Text({
  className,
  size = "m",
  weight = "regular",
  as: Component = "p",
  htmlFor, // fix type of component when used as label and remove this prop (passed in ...props)
  truncate = false,
  lines: linesProp,
  color,
  uppercase,
  underline,
  children,
  style,
  ...props
}: TextProps) {
  const lines = truncate ? (linesProp ?? 1) : undefined
  const isTitleSize = size?.startsWith("title-")
  const weightClass = isTitleSize ? undefined : weight

  return (
    <Component
      className={clsx(
        styles.text,
        styles[size],
        weightClass && styles[weightClass],
        truncate && lines === 1 && styles.truncateSingle,
        truncate && lines && lines > 1 && styles.truncateMulti,
        uppercase && styles.uppercase,
        underline && styles.underline,
        className,
      )}
      style={
        {
          "--text-color": color ? `var(--color-${color})` : undefined,
          "--text-lines": truncate && lines && lines > 1 ? lines : undefined,
          ...style,
        } as CSSProperties
      }
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </Component>
  )
}
