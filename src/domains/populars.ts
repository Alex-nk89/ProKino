import { InfinityQuery } from "./common";
import { Film } from "./films";

export interface PopularsRequestParams {
  premiereDate: string[];
}

export interface PopularsList extends InfinityQuery {
  docs: Popular[];
  total: number;
}

export interface Popular
  extends Pick<
    Film,
    | "id"
    | "name"
    | "backdrop"
    | "poster"
    | "description"
    | "shortDescription"
    | "premiere"
    | "ageRating"
    | "genres"
    | "movieLength"
    | "rating"
    | "year"
  > {}
