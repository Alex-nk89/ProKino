import { Movie, MovieResponse } from "../domains/movie";
import { PremieresList, PremieresRequestParams } from "../domains/premiere";

export interface PremiereService {
  getPremieres(params: PremieresRequestParams): Promise<PremieresList>;
}

export interface MovieService {
  getMovie(params: MovieResponse): Promise<Movie>;
}
