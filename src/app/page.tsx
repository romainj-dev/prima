import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button/Button";
import { TextInput } from "@/components/ui/form/text-input/TextInput";
import styles from "./page.module.scss";
import { UserList } from "@/components/features/user/user-list/UserList";
import { Text } from "@/components/ui/typography/Text";
import { UserRoleBadge } from "@/components/features/user/user-badge/UserRoleBadge";
import { FilterRow } from "@/components/commons/list/filters/FilterRow";

function Header() {
  const t = useTranslations("dashboard.header");
  return (
    <header className={styles.header}>
      <Text size="title-xxl" as="h1" className={styles.title}>
        <span className={styles.titleHighlight}>{t("title_user")}</span>
        {t("title_dashboard")}
      </Text>
    </header>
  );
}

function SearchButton() {
  const t = useTranslations("dashboard.search");
  return (
    <Button size="medium" stretchHeight>
      <span className={styles.searchButtonText}>{t("button")}</span>
      <svg
        className={styles.searchButtonIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </Button>
  );
}

function SearchSection() {
  const t = useTranslations("dashboard.search");
  return (
    <div className={styles.searchSection}>
      <TextInput
        label={t("label")}
        placeholder={t("placeholder")}
        className={styles.searchInput}
        addon={<SearchButton />}
      />
    </div>
  );
}

function FilterSection() {
  return (
    <FilterRow>
      <UserRoleBadge role="admin" />
      <UserRoleBadge role="editor" />
      <UserRoleBadge role="viewer" />
      <UserRoleBadge role="guest" />
      <UserRoleBadge role="owner" />
    </FilterRow>
  );
}

export default function DashboardPage() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <Header />

      {/* Search Section */}
      <SearchSection />

      <UserList filters={<FilterSection />} className={styles.userList} />
    </main>
  );
}
