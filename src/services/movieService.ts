import { api } from ".";
import { MovieService } from "../application/ports";

export const movieService: MovieService = {
  getMovie(params) {
    return api(`/v1.4/movie/${params.id}`);
  },

  getMovieImageList(id) {
    return api("/v1.4/image", {
      params: {
        movieId: id,
      },
    });
  },
};
