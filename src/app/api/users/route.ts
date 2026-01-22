import { NextRequest, NextResponse } from "next/server"
import { getUsers } from "@/lib/users"
import { User } from "@/types/user"
import { getErrorCode } from "@/lib/errors"

export interface UsersResponse {
  users: User[]
}

/**
 * Currently unused - could be used to add pagination, sorting, etc.
 * Use if client-side filtering is needed. Server-side filtering is currently preferred.
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("q") || undefined
    const role = searchParams.get("role") || undefined

    const result = await getUsers({ filters: { query, role } })

    return NextResponse.json<UsersResponse>(result)
  } catch (error) {
    console.error("Failed to load users", error)
    const code = getErrorCode(error)
    return NextResponse.json({ error: { code } }, { status: 500 })
  }
}
