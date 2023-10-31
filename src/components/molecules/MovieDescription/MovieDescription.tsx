import { useCurrentMovie } from "../../../application/providers/movieProvider";
import { Container } from "../../atoms/Container/Container";
import { Skeleton, Text } from "@mantine/core";

export const MovieDescription = () => {
  const { movie, isLoading } = useCurrentMovie();

  if (!movie?.description) {
    return null;
  }

  return (
    <Skeleton visible={isLoading} height={150}>
      <Container title="Обзор">
        {movie && <Text>{movie.description}</Text>}
      </Container>
    </Skeleton>
  );
};
