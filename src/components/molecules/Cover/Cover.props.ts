import { Movie } from "../../../domains/movie";
import { Premiere } from "../../../domains/premiere";

export type CoverProps = Partial<Premiere> &
  Pick<
    Movie,
    | "id"
    | "backdrop"
    | "poster"
    | "name"
    | "genres"
    | "year"
    | "ageRating"
    | "movieLength"
    | "rating"
  >;
