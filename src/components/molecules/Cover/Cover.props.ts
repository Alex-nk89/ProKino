import { Movie } from "../../../domains/movie";
import { Popular } from "../../../domains/populars";

export type CoverProps = Partial<Popular> &
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
