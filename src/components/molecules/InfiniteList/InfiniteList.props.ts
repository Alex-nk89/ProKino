import { ComponentProps } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export interface InfiniteListProps<T>
  extends Omit<
    ComponentProps<typeof InfiniteScroll>,
    "dataLength" | "children" | "loader"
  > {
  list: T[];
  renderItem: (item: T, index: number) => JSX.Element;
}
