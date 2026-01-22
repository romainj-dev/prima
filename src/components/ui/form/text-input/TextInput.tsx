import React, { InputHTMLAttributes, forwardRef, useId, ReactNode } from "react"
import styles from "./TextInput.module.scss"
import clsx from "clsx"
import { Text } from "@/components/ui/typography/Text"

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  addon?: ReactNode
}

function TextInputComponent(
  { className, label, id, addon, ...props }: TextInputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const generatedId = useId()
  const inputId = id || generatedId

  return (
    <div className={clsx(styles.container, className)}>
      {label && (
        <Text size="s" as="label" htmlFor={inputId} color="text-gray" uppercase>
          {label}
        </Text>
      )}
      <div className={clsx(styles.inputWrapper, addon && styles.hasAddon)}>
        <input ref={ref} id={inputId} className={styles.input} {...props} />
        {addon && <div className={styles.addon}>{addon}</div>}
      </div>
    </div>
  )
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  TextInputComponent,
)

TextInput.displayName = "TextInput"
