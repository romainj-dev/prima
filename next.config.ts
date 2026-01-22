import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    additionalData: `@use "@/styles/theme" as *;`,
  },
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
