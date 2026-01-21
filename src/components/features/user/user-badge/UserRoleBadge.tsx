import { Badge } from "@/components/ui/badge/Badge";
import { User } from "@/components/features/user/user-card/UserCard";
import { useTranslations } from "next-intl";

export interface UserRoleBadgeProps {
  role: User["role"];
}

export function UserRoleBadge({ role }: UserRoleBadgeProps) {
  const t = useTranslations("user.role");

  const bgVar = {
    admin: "--color-user-role-admin",
    editor: "--color-user-role-editor",
    viewer: "--color-user-role-viewer",
    guest: "--color-user-role-guest",
    owner: "--color-user-role-owner",
    inactive: "--color-text-gray",
  }[role];
  const colorVar = {
    admin: "--color-text-white",
    editor: "--color-text-white",
    viewer: "--color-text-white",
    guest: "--color-text-white",
    owner: "--color-text",
    inactive: "--color-text-gray",
  }[role];

  const text = t(role);

  return (
    <Badge bgVar={bgVar} colorVar={colorVar}>
      {text}
    </Badge>
  );
}
