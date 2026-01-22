"use client"

import { ReactNode, useCallback, useTransition } from "react"
import { usePathname, useRouter } from "next/navigation"
import { UserListControls } from "./UserListClient"
import { UserListSkeleton } from "./UserList"
import { normalizeSearchQuery } from "@/lib/search"
import { ErrorBoundary } from "@/components/commons/error-boundary/ErrorBoundary"

interface UserListShellProps {
  initialQuery?: string
  initialRole: string | null
  children: ReactNode
}

export function UserListShell({
  initialQuery = "",
  initialRole,
  children,
}: UserListShellProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleApplyFilters = useCallback(
    (query: string, role: string | null) => {
      const params = new URLSearchParams()
      const sanitizedQuery = normalizeSearchQuery(query)
      if (sanitizedQuery) {
        params.set("q", sanitizedQuery)
      }
      if (role) {
        params.set("role", role)
      }

      const newSearch = params.toString()
      const newUrl = newSearch ? `${pathname}?${newSearch}` : pathname
      startTransition(() => {
        router.push(newUrl, { scroll: false })
      })
    },
    [pathname, router, startTransition],
  )

  return (
    <>
      <ErrorBoundary>
        <UserListControls
          key={`${initialQuery}::${initialRole ?? ""}`}
          initialQuery={initialQuery}
          initialRole={initialRole}
          onApplyFilters={handleApplyFilters}
        />
      </ErrorBoundary>
      {isPending ? <UserListSkeleton /> : children}
    </>
  )
}
