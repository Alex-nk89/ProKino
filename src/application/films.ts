import { useQuery } from "react-query";
import { keys } from "./queryKeys";
import { filmService } from "../services/premiereService";
import { PremieresRequestParams } from "../domains/premiere";

export const usePremieres = (params: PremieresRequestParams) =>
  useQuery(keys.getPremieres, () => filmService.getPremieres(params));
