import { Rating, Skeleton, Title, Text } from "@mantine/core";
import { useCurrentMovie } from "../../../application/providers/movieProvider";
import { Container } from "../../atoms/Container/Container";
import styles from "./MovieRating.module.scss";
import { useMediaQuery } from "@mantine/hooks";

export const MovieRating = () => {
  const { movie, isLoading } = useCurrentMovie();

  const isMobile = useMediaQuery("(max-width: 900px)");
  const ratingSize = isMobile ? "md" : "xl";

  if (isLoading) {
    return <Skeleton visible={true} height={250} />;
  }

  if (!movie?.rating.kp) {
    return null;
  }

  return (
    <Container
      withBackground
      title="Рейтинг фильма"
      classname={styles.container}
    >
      <div className={styles.kpRating}>
        <Rating readOnly value={movie.rating.kp} count={10} size={ratingSize} />
        <div className={styles.ratingBlock}>
          <Title order={4} size="h1">
            {movie.rating.kp.toFixed(1)}
          </Title>
          <Text>{`${movie.votes.kp} оценок`}</Text>
        </div>
      </div>
      <div className={styles.kpRating}>
        <Text>{`IMDb: ${
          movie.rating.imdb
        }/${movie.votes.imdb.toLocaleString()} оценок`}</Text>
        <Text>{`Критики: ${
          movie.rating.filmCritics
        }/${movie.votes.filmCritics.toLocaleString()} оценок`}</Text>
      </div>
    </Container>
  );
};
