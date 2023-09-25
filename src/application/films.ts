import { useQuery } from "react-query";
import { keys } from "./queryKeys";
import { filmService } from "../services/filmService";

export const usePremieres = () =>
  useQuery(keys.getPremieres, filmService.getPremieres);
