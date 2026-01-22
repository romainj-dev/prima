"use client"

import { useState, useEffect } from "react"
import { USER_ROLES } from "@/types/user"
import { TextInput } from "@/components/ui/form/text-input/TextInput"
import { Button } from "@/components/ui/button/Button"
import { UserRoleBadge } from "@/components/features/user/user-badge/UserRoleBadge"
import { FilterRow } from "@/components/commons/list/filters/FilterRow"
import { useTranslations } from "next-intl"
import styles from "./UserListClient.module.scss"

function SearchButton() {
  const t = useTranslations("dashboard.search")
  return (
    <Button type="submit" size="medium" stretchHeight>
      <span className={styles.searchButtonText}>{t("button")}</span>
      <svg
        className={styles.searchButtonIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </Button>
  )
}

interface SearchSectionProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  onSubmit: (e: React.FormEvent) => void
}

function SearchSection({ searchQuery, onSearchChange, onSubmit }: SearchSectionProps) {
  const t = useTranslations("dashboard.search")
  return (
    <form onSubmit={onSubmit} className={styles.searchSection}>
      <TextInput
        label={t("label")}
        placeholder={t("placeholder")}
        className={styles.searchInput}
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        addon={<SearchButton />}
      />
    </form>
  )
}

interface FilterSectionProps {
  selectedRole: string | null
  onRoleSelect: (role: string | null) => void
}

function FilterSection({ selectedRole, onRoleSelect }: FilterSectionProps) {
  return (
    <FilterRow>
      {USER_ROLES.map((role) => (
        <UserRoleBadge
          key={role}
          role={role}
          onClick={() => onRoleSelect(selectedRole === role ? null : role)}
          looksDisabled={!!selectedRole && selectedRole !== role}
        />
      ))}
    </FilterRow>
  )
}

interface UserListControlsProps {
  initialQuery?: string
  initialRole: string | null
  onApplyFilters: (query: string, role: string | null) => void
  className?: string
}

export function UserListControls({
  initialQuery = "",
  initialRole,
  onApplyFilters,
  className,
}: UserListControlsProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [selectedRole, setSelectedRole] = useState<string | null>(initialRole)

  useEffect(() => {
    setSearchQuery(initialQuery)
    setSelectedRole(initialRole)
  }, [initialQuery, initialRole])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onApplyFilters(searchQuery, selectedRole)
  }

  const handleRoleSelect = (role: string | null) => {
    const newRole = selectedRole === role ? null : role
    setSelectedRole(newRole)
    onApplyFilters(searchQuery, newRole)
  }

  return (
    <div className={className}>
      <SearchSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSubmit={handleSearchSubmit}
      />
      <FilterSection
        selectedRole={selectedRole}
        onRoleSelect={handleRoleSelect}
      />
    </div>
  )
}
