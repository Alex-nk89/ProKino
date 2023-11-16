import { Movie, MovieResponse } from "../domains/movie";
import { PopularsList, PopularsRequestParams } from "../domains/populars";

export interface PopularService {
  getPremieres(params: PopularsRequestParams): Promise<PopularsList>;
}

export interface MovieService {
  getMovie(params: MovieResponse): Promise<Movie>;
}
