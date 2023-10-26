import { PropsWithChildren } from "react";
import { Header } from "..";
import { AppShell } from "@mantine/core";
import styles from "./AppDecorator.module.scss";

interface Props extends PropsWithChildren {}

export const AppDecorator = ({ children }: Props) => {
  return (
    <AppShell>
      <Header />
      <main className={styles.wrapper}>{children}</main>
    </AppShell>
  );
};
