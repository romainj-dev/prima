import { User } from "@/types/user"
import { MOCK_USERS } from "@/data/users"
import { normalizeSearchQuery } from "@/lib/search"

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

  // Normalize query to prevent injection and enforce length limits
  const sanitizedQuery = normalizeSearchQuery(query)

  // Filter by name (first name or last name)
  if (sanitizedQuery) {
    const searchQuery = sanitizedQuery.toLowerCase()
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
