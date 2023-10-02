import { InfinityQuery } from "./common";
import { Film } from "./films";

export interface PremieresRequestParams {
  premiereDate: string[];
}

export interface PremieresList extends InfinityQuery {
  docs: Premiere[];
  total: number;
}

export interface Premiere extends Pick<Film, "id" | "name" | "backdrop"> {}
