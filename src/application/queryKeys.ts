export const keys = {
  getPremieres: ["premieres"] as const,
  getMovie: (id: number) => ["movie", `${id}`] as const,
};
