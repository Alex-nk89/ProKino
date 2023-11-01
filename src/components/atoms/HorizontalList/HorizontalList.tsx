import { ScrollArea } from "@mantine/core";
import { HorizontalListProps } from "./HorizontalList.props";
import styles from "./HorizontalList.module.scss";
import clsx from "clsx";

export const HorizontalList = ({
  className,
  children,
}: HorizontalListProps) => {
  return (
    <ScrollArea>
      <div className={clsx(styles.container, className)}>{children}</div>
    </ScrollArea>
  );
};
