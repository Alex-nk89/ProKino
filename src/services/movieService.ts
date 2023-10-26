import { api } from ".";
import { MovieService } from "../application/ports";

export const movieService: MovieService = {
  getMovie(params) {
    return api(`/v1.3/movie/${params.id}`);
  },
};
