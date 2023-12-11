export const keys = {
  getPopulars: ["populars"] as const,
  getMovie: (id: number) => ["movie", id] as const,
  getMovieImageList: (id: number) => ["movieImage", id] as const,
};
