import { useCurrentMovie } from "../../../application/providers/movieProvider";
import { Container } from "../../atoms/Container/Container";
import { HorizontalList } from "../../atoms/HorizontalList/HorizontalList";
import { SimpleCard } from "../../atoms/SimpleCard/SimpleCard";

export const MovieTrailers = () => {
  const { movie } = useCurrentMovie();

  if (!movie?.videos || movie?.videos.trailers.length === 0) {
    return null;
  }

  return (
    <Container title="Трейлеры">
      <HorizontalList>
        {movie?.videos.trailers.map((item) => (
          <>
            {item.url && (
              <SimpleCard
                key={item.url}
                videoSrc={item.url}
                title={item.name ?? undefined}
              />
            )}
          </>
        ))}
      </HorizontalList>
    </Container>
  );
};
