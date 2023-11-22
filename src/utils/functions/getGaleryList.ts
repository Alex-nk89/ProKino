import { File } from "../../domains/common";
import { MovieImage } from "../../domains/movie";

export const getGaleryListFromMovieImage = (list: MovieImage[]): File[] =>
  list.map(({ id, url }) => ({ id: id, src: url }));
