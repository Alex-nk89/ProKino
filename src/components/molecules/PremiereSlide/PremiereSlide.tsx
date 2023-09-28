import { PremiereSlideProps } from "./PremiereSlide.props";
import styles from "./PremiereSlide.module.scss";

export const PremiereSlide = (props: PremiereSlideProps) => {
  const { posterUrl, nameRu } = props;

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url("${posterUrl}")` }}
    >
      <div className={styles.info}>
        {/* <Title order={2} size="h1" className={styles.title}>
          {nameRu}
        </Title> */}
      </div>
    </div>
  );
};
