import { HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Divider.module.scss";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  className?: string;
}

export function Divider({ className, ...props }: DividerProps) {
  return <hr className={clsx(styles.divider, className)} {...props} />;
}
