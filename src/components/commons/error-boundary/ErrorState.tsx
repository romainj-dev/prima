"use client"

import clsx from "clsx"
import styles from "./ErrorState.module.scss"
import { Text } from "@/components/ui/typography/Text"
import { Button } from "@/components/ui/button/Button"
import { Link } from "@/components/ui/link/Link"
import { useTranslations } from "next-intl"
import { getErrorMessage } from "@/lib/errors"

interface ErrorStateProps {
  error?: unknown
  onRetry?: () => void
  className?: string
}

export function ErrorState({ error, onRetry, className }: ErrorStateProps) {
  const t = useTranslations("error")
  const description = getErrorMessage(t, error, "description")
  const homeUrl = new URL("/", window.location.origin).toString()

  return (
    <section className={clsx(styles.wrapper, className)}>
      <div className={styles.card}>
        <Text as="h1" size="title-l">
          {t("title")}
        </Text>
        <Text size="l" color="text-gray">
          {description}
        </Text>
        <div className={styles.actions}>
          <Button type="button" onClick={onRetry}>
            {t("retry")}
          </Button>
          <Link href={homeUrl} size="m" openInNewTab={false}>
            {t("home")}
          </Link>
        </div>
      </div>
    </section>
  )
}
