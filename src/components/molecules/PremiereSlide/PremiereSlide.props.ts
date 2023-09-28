import { Premiere } from "../../../domains/films";

export interface PremiereSlideProps
  extends Pick<Premiere, "posterUrl" | "nameRu"> {}
