import InfiniteScroll from "react-infinite-scroll-component";
import { InfiniteListProps } from "./InfiniteList.props";
import { InfiniteLoader } from "../../atoms/InfiniteLoader/InfiniteLoader";

export const InfiniteList = <T extends object>(props: InfiniteListProps<T>) => {
  const { list, renderItem, ...otherProps } = props;

  return (
    <InfiniteScroll
      {...otherProps}
      dataLength={list.length}
      loader={<InfiniteLoader />}
    >
      {list.map((item, index) => renderItem(item, index))}
    </InfiniteScroll>
  );
};
