import { Nullable } from "./common";

export interface PremieresList {
  total: number;
  items: Premiere[];
}

export interface Premiere {
  kinopoiskId: number;
  nameRu: Nullable<string>;
  nameEn: Nullable<string>;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: Country[];
  genres: Genre[];
  duration: Nullable<number>;
  premiereRu: string;
}

export interface Country {
  country: string;
}

export interface Genre {
  genre: string;
}
