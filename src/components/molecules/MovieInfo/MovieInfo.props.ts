import { Movie } from "../../../domains/movie";

export interface MovieInfoProps
  extends Partial<
    Pick<Movie, "ageRating" | "genres" | "movieLength" | "rating" | "year">
  > {}
