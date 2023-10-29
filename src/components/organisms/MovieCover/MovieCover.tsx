import { memo } from "react";
import { useCurrentMovie } from "../../../application/providers/movieProvider";
import { Cover } from "../../molecules/Cover/Cover";

export const MovieCover = memo(() => {
  const { movie } = useCurrentMovie();

  return (
    <>
      {movie && (
        <Cover
          isMoviePage
          id={movie?.id}
          name={movie.name}
          poster={movie.poster}
          backdrop={movie.backdrop}
          shortDescription={movie.shortDescription}
          description={movie.description}
          year={movie.year}
          genres={movie.genres}
          ageRating={movie.ageRating}
        />
      )}
    </>
  );
});
