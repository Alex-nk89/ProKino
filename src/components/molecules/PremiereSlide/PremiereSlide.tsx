import { PremiereSlideProps } from "./PremiereSlide.props";
import { Box, Title, Text, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import styles from "./PremiereSlide.module.scss";
import { getDatePremiere } from "../../../utils/date";
import clsx from "clsx";

export const PremiereSlide = (props: PremiereSlideProps) => {
  const { backdrop, name, poster, description, shortDescription, premiere } =
    props;
  const isMobile = useMediaQuery("(max-width: 900px)");

  const isShowDescription = description || shortDescription;

  const backgroundImage = isMobile
    ? `url("${poster.previewUrl}")`
    : `url("${backdrop.url}")`;

  const isShowPoster = !isMobile && !backdrop.url && poster.url;

  const cnSlide = clsx(styles.container, {
    [styles.withPoster]: isShowPoster,
  });

  return (
    <>
      <Box id="premiereSlide" className={cnSlide} style={{ backgroundImage }}>
        <div className={styles.poster}>
          {isShowPoster && (
            <Image src={poster.url} fit="contain" height="100%" />
          )}
        </div>
        <div className={styles.info}>
          <Title className={styles.title}>{name.toUpperCase()}</Title>
          {isShowDescription && (
            <Text lineClamp={4}>{shortDescription || description}</Text>
          )}
          <Text>{getDatePremiere(premiere)}</Text>
        </div>
      </Box>
    </>
  );
};
