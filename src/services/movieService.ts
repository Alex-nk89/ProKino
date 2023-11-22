import { api } from ".";
import { MovieService } from "../application/ports";
import { MovieImageListParams } from "../domains/movie";
import { getSelectFields } from "../utils/functions/selectFields";

export const movieService: MovieService = {
  getMovie(params) {
    return api(`/v1.4/movie/${params.id}`);
  },

  getMovieImageList({ id, limit, page }: MovieImageListParams) {
    return api("/v1.4/image", {
      params: {
        movieId: id,
        limit,
        page,
        ...getSelectFields().imageStill,
      },
    });
  },
};
