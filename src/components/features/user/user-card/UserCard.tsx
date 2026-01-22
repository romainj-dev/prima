"use client"

import { Text } from "@/components/ui/typography/Text"
import { Button } from "@/components/ui/button/Button"
import { Link } from "@/components/ui/link/Link"
import styles from "./UserCard.module.scss"
import { UserRoleBadge } from "@/components/features/user/user-badge/UserRoleBadge"
import { useTranslations } from "next-intl"
import { User } from "@/types/user"
import clsx from "clsx"

export type { User }

export interface UserCardProps {
  user: User
  onViewDetails?: (userId: string) => void
}

export function UserCard({ user, onViewDetails }: UserCardProps) {
  const t = useTranslations("user.card")
  const fullName = `${user.firstName} ${user.lastName}`

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <UserRoleBadge role={user.role} />
        <div className={styles.userInfo}>
          <Text size="title-m" as="h3" truncate title={fullName}>
            {fullName}
          </Text>
          <Text size="m" color="text-gray" truncate title={user.jobTitle}>
            {user.jobTitle}
          </Text>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <Text size="s" color="text-gray" weight="light">
            {t("team")}:
          </Text>
          <Text size="s" weight="medium" truncate title={user.team}>
            {user.team}
          </Text>
        </div>

        <div className={styles.section}>
          <Text size="s" color="text-gray" weight="light">
            {t("contact_information")}:
          </Text>
          {/* Handling long emails with truncation */}
          <Link href={`mailto:${user.email}`} size="s" title={user.email}>
            {user.email}
          </Link>
        </div>
      </div>

      <Button
        fullWidth
        onClick={() => onViewDetails?.(user.id)}
        data-testid="view-details-button"
      >
        {t("view_details")}
      </Button>
    </div>
  )
}

export function UserCardSkeleton() {
  return <div className={clsx(styles.card, styles.skeletonCard)} />
}
