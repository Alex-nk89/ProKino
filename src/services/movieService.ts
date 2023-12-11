import { api } from ".";
import { MovieService } from "../application/ports";
import { MovieImageListParams } from "../domains/movie";

export const movieService: MovieService = {
  getMovie(params) {
    return api(`/v1.4/movie/${params.id}`);
  },

  getMovieImageList({ id, limit, page, movieType }: MovieImageListParams) {
    return api("/v1.4/image", {
      params: {
        movieId: id,
        limit,
        page,
        type: movieType,
      },
    });
  },
};
