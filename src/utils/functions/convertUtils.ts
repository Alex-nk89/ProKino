import { File } from "../../domains/common";
import { MovieImage } from "../../domains/movie";

export const convertMovieImageToFile = (
  listImage: MovieImage[],
  isMobile?: boolean
): File[] =>
  listImage.map(({ id, url, previewUrl }) => ({
    id,
    src: isMobile ? previewUrl : url,
  }));
