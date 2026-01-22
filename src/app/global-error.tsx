"use client"

import { useEffect } from "react"
import { Poppins } from "next/font/google"
import "@/styles/globals.scss"
import { ErrorState } from "@/components/commons/error-boundary/ErrorState"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
})

export default function GlobalError({
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

  return (
    <html className={poppins.variable}>
      <body>
        <ErrorState error={error} onRetry={reset} />
      </body>
    </html>
  )
}
