import {
  UserCard,
  UserCardSkeleton,
} from "@/components/features/user/user-card/UserCard"
import { User } from "@/types/user"
import styles from "./UserList.module.scss"
import clsx from "clsx"

interface UserListContainerProps {
  children: React.ReactNode
  className?: string
}

function Container({ children, className }: UserListContainerProps) {
  return (
    <div className={clsx(styles.userList, className)}>
      <div className={styles.grid}>{children}</div>
    </div>
  )
}

export interface UserListProps {
  users: User[]
  className?: string
}

export function UserList({ users, className }: UserListProps) {
  return (
    <div className={clsx(styles.userList, className)}>
      <div className={styles.grid}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

interface UserListSkeletonProps {
  count?: number
  className?: string
}

export function UserListSkeleton({
  count = 8,
  className,
}: UserListSkeletonProps) {
  return (
    <div className={clsx(styles.userList, className)}>
      <div className={styles.grid}>
        {Array.from({ length: count }).map((_, index) => (
          <UserCardSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}
