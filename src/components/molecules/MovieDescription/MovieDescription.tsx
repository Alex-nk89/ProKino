import { useCurrentMovie } from "../../../application/providers/movieProvider";
import { Container } from "../../atoms/Container/Container";
import { Skeleton, Text } from "@mantine/core";

export const MovieDescription = () => {
  const { movie, isLoading } = useCurrentMovie();

  if (isLoading) {
    return <Skeleton visible={true} height={150} />;
  }

  if (!movie?.description) {
    return null;
  }

  return (
    <Container title="Обзор">
      {movie && <Text>{movie.description}</Text>}
    </Container>
  );
};
