import { CoverProps } from "./Cover.props";
import { Box, Title, Text, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import styles from "./Cover.module.scss";
import clsx from "clsx";
import { MovieInfo } from "../MovieInfo/MovieInfo";

export const Cover = (props: CoverProps) => {
  const {
    backdrop,
    name,
    poster,
    description,
    shortDescription,
    ageRating,
    genres,
    movieLength,
    rating,
    year,
  } = props;

  const isMobile = useMediaQuery("(max-width: 900px)");

  const backgroundImage = isMobile
    ? `url("${poster.previewUrl}")`
    : `url("${backdrop.url}")`;

  const isShowPoster = !isMobile && !backdrop.url && poster.url;
  const isShowDescription = description || shortDescription;

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
          <MovieInfo
            ageRating={ageRating}
            genres={genres}
            movieLength={movieLength}
            rating={rating}
            year={year}
          />
          {isShowDescription && (
            <Text lineClamp={4}>{shortDescription || description}</Text>
          )}
        </div>
      </Box>
    </>
  );
};
