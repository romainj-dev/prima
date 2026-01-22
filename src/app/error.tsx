"use client"

import { useEffect } from "react"
import { ErrorState } from "@/components/commons/error-boundary/ErrorState"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  // TODO logger
  useEffect(() => {
    console.error(error)
  }, [error])

  return <ErrorState error={error} onRetry={reset} />
}
