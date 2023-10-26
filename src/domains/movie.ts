import { Film } from "./films";

export interface Movie
  extends Pick<
    Film,
    "id" | "name" | "backdrop" | "poster" | "genres" | "year" | "ageRating"
  > {}

export interface MovieResponse {
  id: number;
}
