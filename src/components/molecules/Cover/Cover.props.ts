import { Movie } from "../../../domains/movie";
import { Premiere } from "../../../domains/premiere";

// export interface CoverProps extends Premiere {}

export type CoverProps = Partial<Premiere> &
  Pick<
    Movie,
    "id" | "backdrop" | "poster" | "name" | "genres" | "year" | "ageRating"
  > & {
    isMoviePage?: boolean;
  };
