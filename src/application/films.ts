import { useQuery } from "react-query";
import { keys } from "./queryKeys";
import { filmService } from "../services/popularService";
import { PopularsRequestParams } from "../domains/populars";

export const usePopulars = (params: PopularsRequestParams) =>
  useQuery(keys.getPopulars, () => filmService.getPremieres(params));
