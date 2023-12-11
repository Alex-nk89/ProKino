import { Loader } from "@mantine/core";
import styles from "./InfiniteLoader.module.scss";

export const InfiniteLoader = () => (
  <div className={styles.container}>
    <Loader type="bars" size="sm" />
  </div>
);
