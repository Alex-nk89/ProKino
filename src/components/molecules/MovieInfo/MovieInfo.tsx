import { Text } from "@mantine/core";
import { MovieProps } from "./MovieInfo.props";
import styles from "./MovieInfo.module.scss";
import {
  IconRating12Plus,
  IconRating14Plus,
  IconRating16Plus,
  IconRating18Plus,
} from "@tabler/icons-react";
import { memo } from "react";

export const MovieInfo = memo(({ year, ageRating, genres }: MovieProps) => {
  const rating: { [key: string]: JSX.Element } = {
    12: <IconRating12Plus />,
    14: <IconRating14Plus />,
    16: <IconRating16Plus />,
    18: <IconRating18Plus />,
  };

  const genresList = genres
    ?.slice(0, 3)
    .map((item) => item.name)
    .join(", ");

  return (
    <div className={styles.wrapper}>
      {year && <Text>{year}</Text>}
      {ageRating && <Text>{rating[ageRating] || ageRating}</Text>}
      {genres && <Text>{genresList}</Text>}
    </div>
  );
});
