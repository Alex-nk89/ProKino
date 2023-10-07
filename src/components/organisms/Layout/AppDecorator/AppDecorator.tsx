import { PropsWithChildren } from "react";
import { Header } from "..";
import { AppShell } from "@mantine/core";

interface Props extends PropsWithChildren {}

export const AppDecorator = ({ children }: Props) => {
  return (
    <AppShell>
      <Header />
      {/* <main>{children}</main> */}
    </AppShell>
  );
};
