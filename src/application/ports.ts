import {
  Movie,
  MovieImageListParams,
  MovieImageListResponse,
  MovieResponse,
} from "../domains/movie";
import { PopularsList, PopularsRequestParams } from "../domains/populars";

export interface PopularService {
  getPremieres(params: PopularsRequestParams): Promise<PopularsList>;
}

export interface MovieService {
  getMovie(params: MovieResponse): Promise<Movie>;

  getMovieImageList(
    params: MovieImageListParams
  ): Promise<MovieImageListResponse>;
}
