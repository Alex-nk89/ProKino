import { Person } from "./common";
import { Film } from "./films";

export interface Movie
  extends Pick<
    Film,
    | "id"
    | "name"
    | "backdrop"
    | "poster"
    | "genres"
    | "year"
    | "ageRating"
    | "shortDescription"
    | "description"
    | "countries"
    | "persons"
    | "premiere"
    | "ratingMpaa"
    | "movieLength"
    | "videos"
    | "rating"
    | "votes"
  > {}

export interface MovieResponse {
  id: number;
}

export interface MovieInfoProps {
  key: string;
  value?: string | number | Person[];
}
