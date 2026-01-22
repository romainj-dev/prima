import { getUsers } from "@/lib/users"
import { UserList } from "./UserList"

interface UserListDataProps {
  query?: string
  role?: string
}

export async function UserListData({ query, role }: UserListDataProps) {
  const { users } = await getUsers({ filters: { query, role } })

  return <UserList users={users} />
}
