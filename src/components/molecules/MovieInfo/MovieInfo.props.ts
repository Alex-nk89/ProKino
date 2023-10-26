import { Movie } from "../../../domains/movie";

export interface MovieProps
  extends Partial<Pick<Movie, "genres" | "year" | "ageRating">> {}
