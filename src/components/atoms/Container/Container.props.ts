import { PropsWithChildren } from "react";

export interface ContainerProps extends PropsWithChildren<unknown> {
  classname?: string;
  title?: string;
  withBackground?: boolean;
}
