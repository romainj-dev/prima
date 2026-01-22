export const USER_ROLES = [
  "admin",
  "editor",
  "viewer",
  "guest",
  "owner",
  "inactive",
] as const

export type UserRole = (typeof USER_ROLES)[number]

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  role: UserRole
  jobTitle: string
  team: string
}
