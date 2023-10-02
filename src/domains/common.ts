import { Film } from "./films";

export type Nullable<T> = T | null;

export interface Id {
  id: number;
}

export interface Rating {
  kp: number;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Voites {
  kp: string;
  imdb: string;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export type TitleTypes =
  | "movie"
  | "tv-series"
  | "cartoon"
  | "anime"
  | "animated-series"
  | "tv-show";

export interface Url {
  url: string;
  previewUrl: string;
}

export interface Name {
  name: string;
}

export interface Trailers {
  url: string;
  name: string;
  site: string;
  type: string;
}

export interface Person {
  id: number;
  photo: string;
  name: string;
  enName: string;
}

export interface ReviewInfo {
  count: number;
  positiveCount: number;
  percentage: string;
}

export interface SeasonsInfo {
  number: number;
  episodesCount: number;
}

export interface Finance {
  value: number;
  currenvy: string;
}

export interface Premiere {
  country: string;
  world: string;
  russia: string;
  digital: string;
  cinema: string;
}

export interface ReleaseYears {
  start: number;
  end: number;
}

export interface Audience {
  count: number;
  country: string;
}

export interface InfinityQuery {
  limit: number;
  page: number;
  pages: number;
}

export type SelectFields = keyof Film;
