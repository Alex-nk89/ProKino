import { Id, ImageType, InfinityQueryParams, Person } from "./common";
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
    | "facts"
  > {}

export interface MovieResponse {
  id: number;
}

export interface MovieInfoProps {
  key: string;
  value?: string | number | Person[];
}

export interface MovieImage {
  movieId: number;
  type: ImageType;
  url: string;
  previewUrl: string;
  height: number;
  width: number;
  createdAt: string;
  updatedAt: string;
  id: Id;
}

export interface MovieImageListResponse {
  docs: MovieImage[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface MovieImageListParams extends InfinityQueryParams {
  id: Id;
}
