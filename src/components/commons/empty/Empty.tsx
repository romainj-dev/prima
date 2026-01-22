import clsx from "clsx"
import styles from "./Empty.module.scss"
import { Text } from "@/components/ui/typography/Text"

interface EmptyProps {
  title: string
  description: string
  className?: string
}

export function Empty({ title, description, className }: EmptyProps) {
  return (
    <section className={clsx(styles.wrapper, className)}>
      <Text as="h2" size="title-m">
        {title}
      </Text>
      <Text size="m" color="text-gray">
        {description}
      </Text>
    </section>
  )
}
