import { Badge } from "@/components/ui/badge/Badge"
import { UserRole } from "@/types/user"
import { useTranslations } from "next-intl"

export interface UserRoleBadgeProps {
  role: UserRole
  onClick?: () => void
  looksDisabled?: boolean
  "data-testid"?: string
}

export function UserRoleBadge({
  role,
  onClick,
  looksDisabled,
  "data-testid": dataTestId,
}: UserRoleBadgeProps) {
  const t = useTranslations("user.role")

  const bgVar = {
    admin: "--color-user-role-admin",
    editor: "--color-user-role-editor",
    viewer: "--color-user-role-viewer",
    guest: "--color-user-role-guest",
    owner: "--color-user-role-owner",
    inactive: "--color-user-role-inactive",
  }[role]
  const colorVar = {
    admin: "--color-text-white",
    editor: "--color-text-white",
    viewer: "--color-text-white",
    guest: "--color-text-white",
    owner: "--color-text",
    inactive: "--color-text",
  }[role]

  const text = t(role)

  return (
    <Badge
      bgVar={bgVar}
      colorVar={colorVar}
      onClick={onClick}
      looksDisabled={looksDisabled}
      data-testid={dataTestId}
    >
      {text}
    </Badge>
  )
}
