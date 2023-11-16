import { Box, Title, Text, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import styles from "./Cover.module.scss";
import { getDatePremiere } from "../../../utils/functions/date";
import clsx from "clsx";
import { CoverProps } from "../Cover/Cover.props";

export const MovieSlide = (props: CoverProps) => {
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
          {premiere && <Text>{getDatePremiere(premiere)}</Text>}
        </div>
      </Box>
    </>
  );
};
