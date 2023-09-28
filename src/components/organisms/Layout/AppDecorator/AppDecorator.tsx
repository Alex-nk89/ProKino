import { PropsWithChildren } from "react";
import { Header } from "..";

interface Props extends PropsWithChildren {}

export const AppDecorator = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
