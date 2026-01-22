import { User } from "@/types/user"
import { MOCK_USERS } from "@/data/users"

export interface GetUsersParams {
  filters?: {
    query?: string
    role?: string
  }
}

export interface GetUsersResult {
  users: User[]
}

const FAKE_API_DELAY_MS = 2000

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getUsers(
  { filters }: GetUsersParams = { filters: {} },
): Promise<GetUsersResult> {
  // Fake async request with delay
  await delay(FAKE_API_DELAY_MS)

  let users = MOCK_USERS

  const { query, role } = filters ?? {}

  // Filter by name (first name or last name)
  if (query) {
    const searchQuery = query.toLowerCase().trim()
    users = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(searchQuery) ||
        user.lastName.toLowerCase().includes(searchQuery),
    )
  }

  // Filter by role
  if (role) {
    users = users.filter((user) => user.role === role.trim())
  }

  return {
    users,
  }
}
