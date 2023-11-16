import { MainCarousele } from "../../organisms/MainCarousel/MainCarousel";
import styles from "./MainView.module.scss";

export const MainView = () => {
  return (
    <div className={styles.wrapper}>
      <MainCarousele />
    </div>
  );
};
