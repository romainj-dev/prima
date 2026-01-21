import { ReactNode } from "react";
import clsx from "clsx";
import { Text } from "@/components/ui/typography/Text";
import { Divider } from "@/components/ui/divider/Divider";
import styles from "./FilterRow.module.scss";
import { useTranslations } from "next-intl";

export interface FilterRowProps {
  children: ReactNode;
  className?: string;
}

export function FilterRow({ children, className }: FilterRowProps) {
  const t = useTranslations("filters");
  return (
    <div className={clsx(styles.filterRow, className)}>
      <div className={styles.scrollableRow}>
        <Text size="s" color="text-gray" uppercase className={styles.label}>
          {t("label")}
        </Text>
        <div className={styles.badgesContainer}>{children}</div>
      </div>
      <Divider />
    </div>
  );
}
