import { getTranslations } from "next-intl/server"
import { getUsers } from "@/lib/users"
import { Empty } from "@/components/commons/empty/Empty"
import { UserList } from "./UserList"

interface UserListDataProps {
  query?: string
  role?: string
}

export async function UserListData({ query, role }: UserListDataProps) {
  const { users } = await getUsers({ filters: { query, role } })
  const t = await getTranslations("user.list.empty")

  if (users.length === 0) {
    return <Empty title={t("title")} description={t("description")} />
  }

  return <UserList users={users} />
}
