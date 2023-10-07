import { PremiereCarousele } from "../../organisms/PremiereCarousel/PremiereCarousel";
import styles from "./MainView.module.scss";

export const MainView = () => {
  return (
    <div className={styles.wrapper}>
      <PremiereCarousele />
    </div>
  );
};
