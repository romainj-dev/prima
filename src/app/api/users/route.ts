import { NextRequest, NextResponse } from "next/server"
import { getUsers } from "@/lib/users"
import { User } from "@/types/user"

export interface UsersResponse {
  users: User[]
}

/**
 * Currently unused - could be used to add pagination, sorting, etc.
 * Use if client-side filtering is needed. Server-side filtering is currently preferred.
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("q") || undefined
  const role = searchParams.get("role") || undefined

  const result = await getUsers({ filters: { query, role } })

  return NextResponse.json<UsersResponse>(result)
}
