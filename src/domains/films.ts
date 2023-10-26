import {
  Audience,
  Finance,
  Id,
  Name,
  Person,
  Premiere,
  Rating,
  ReleaseYears,
  SeasonsInfo,
  TitleTypes,
  Url,
  Voites,
  Nullable,
} from "./common";

export interface Film {
  id: number;
  name: string;
  alternativeName: string;
  enName: string;
  names: Name;
  type: TitleTypes;
  year: number;
  description: Nullable<string>;
  shortDescription: Nullable<string>;
  slogan: string;
  status: string;
  rating: Rating;
  votes: Voites;
  movieLength: number;
  ratingMpaa: string;
  ageRating: Nullable<number>;
  logo: Pick<Url, "url">;
  poster: Url;
  backdrop: Url;
  genres: Name[];
  countries: Name[];
  persons: Person[];
  seasonsInfo: SeasonsInfo;
  budget: Finance;
  fees: {
    world: Finance;
    russia: Finance;
    usa: Finance;
  };
  premiere: Premiere;
  similarMovies: Id;
  sequelsAndPrequels: Id;
  watchability: {
    items: Name;
  };
  releaseYears: ReleaseYears;
  top10: number;
  top250: number;
  ticketsOnSale: boolean;
  totalSeriesLength: number;
  seriesLength: number;
  isSeries: boolean;
  audience: Audience;
}
