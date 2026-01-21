import { UserCard, User } from "@/components/features/user/user-card/UserCard";
import styles from "./UserList.module.scss";
import { ReactNode } from "react";
import clsx from "clsx";

// Mock Data
const MOCK_USERS: User[] = [
  {
    id: "1",
    firstName: "George",
    lastName: "Harris",
    role: "admin",
    jobTitle: "Software Engineer",
    team: "Security",
    email: "george.harris@example.com",
  },
  {
    id: "2",
    firstName: "Arianna",
    lastName: "Russo",
    role: "editor",
    jobTitle: "Product Designer",
    team: "Website",
    email: "arianna.russo@example.com",
  },
  {
    id: "3",
    firstName: "Marco",
    lastName: "Esposito",
    role: "viewer",
    jobTitle: "Software Engineer",
    team: "Finance",
    email: "marco.esposito@example.com",
  },
  {
    id: "4",
    firstName: "Sarah",
    lastName: "Williams",
    role: "guest",
    jobTitle: "Product Designer",
    team: "Security",
    email: "sarah.williams@example.com",
  },
  {
    id: "5",
    firstName: "Emma",
    lastName: "Clark",
    role: "guest",
    jobTitle: "Product Manager",
    team: "Marketing",
    email: "emma.clark@example.com",
  },
  {
    id: "6",
    firstName: "Victor",
    lastName: "Barnes",
    role: "viewer",
    jobTitle: "Product Manager",
    team: "Finance",
    email: "victor.barnes@example.com",
  },
  {
    id: "7",
    firstName: "Serena",
    lastName: "Parisi",
    role: "guest",
    jobTitle: "Product Designer",
    team: "Marketing",
    email: "serena.parisi@example.com",
  },
  {
    id: "8",
    firstName: "John",
    lastName: "HasAVeryLongNameButItsOkWeHaveEllipsis",
    role: "admin",
    jobTitle:
      "Software Engineer With A Very Long Job Title That Should Be Truncated",
    team: "Security",
    email: "john.hasaverylongnamebutitsokwehaveellipsis@example.com",
  },
];

export interface UserListProps {
  users?: User[];
  filters?: ReactNode;
  className?: string;
}

export function UserList({
  users = MOCK_USERS,
  filters,
  className,
}: UserListProps) {
  return (
    <div className={clsx(styles.userList, className)}>
      {filters ?? null}
      <div className={styles.grid}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
