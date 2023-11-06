import { Text } from "@mantine/core";
import { memo } from "react";
import { Rating } from "../../atoms/Rating/Rating";
import { getHours, getMinutes } from "../../../utils/functions/date";
import styles from "./MovieInfo.module.scss";
import { MovieInfoProps } from "./MovieInfo.props";

const textProps = {
  fw: 500,
  size: "lg",
};

export const MovieInfo = memo((props: MovieInfoProps) => {
  const { rating, ageRating, genres, movieLength, year } = props;

  const isShowRating = rating && !!rating.kp;

  return (
    <div className={styles.wrapper}>
      {isShowRating && <Rating rating={rating.kp} />}
      {year && <Text {...textProps}>{year}</Text>}
      {genres && <Text {...textProps}>{genres[0].name}</Text>}
      {movieLength && (
        <Text {...textProps}>{`${getHours(movieLength)}ч. ${getMinutes(
          movieLength
        )}м.`}</Text>
      )}
      {ageRating && <Text {...textProps}>{ageRating}+</Text>}
    </div>
  );
});
