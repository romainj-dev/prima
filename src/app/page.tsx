import { useTranslations } from "next-intl"
import { Suspense } from "react"
import styles from "./page.module.scss"
import { UserListShell } from "@/components/features/user/user-list/UserListShell"
import { UserListData } from "@/components/features/user/user-list/UserListData"
import { UserListSkeleton } from "@/components/features/user/user-list/UserList"
import { Text } from "@/components/ui/typography/Text"

function Header() {
  const t = useTranslations("dashboard.header")
  return (
    <header className={styles.header}>
      <Text size="title-xxl" as="h1" className={styles.title}>
        <span className={styles.titleHighlight}>{t("title_user")}</span>
        {t("title_dashboard")}
      </Text>
    </header>
  )
}

interface DashboardPageProps {
  searchParams: Promise<{ q?: string; role?: string }>
}

export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  // SSR: Read searchParams and filter users server-side
  const { q, role } = await searchParams
  const query = q || undefined

  return (
    <main className={styles.main}>
      {/* Header */}
      <Header />

      <UserListShell initialQuery={q || ""} initialRole={role || null}>
        <Suspense fallback={<UserListSkeleton />}>
          <UserListData query={query} role={role || undefined} />
        </Suspense>
      </UserListShell>
    </main>
  )
}
