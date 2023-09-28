import { useQuery } from "react-query";
import { keys } from "./queryKeys";
import { filmService } from "../services/filmService";
import { PremieresRequestParams } from "../domains/films";

export const usePremieres = (params: PremieresRequestParams) =>
  useQuery(keys.getPremieres, () => filmService.getPremieres(params));
