import { Id } from "../domains/common";

export const keys = {
  getPopulars: ["populars"] as const,
  getMovie: (id: number) => ["movie", id] as const,
  getMovieImageList: (id: Id) => ["movieImage", id],
};
