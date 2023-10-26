import { useQuery } from "react-query";
import { keys } from "./queryKeys";
import { movieService } from "../services/movieService";
import { MovieResponse } from "../domains/movie";

export const useMovie = ({ id }: MovieResponse) =>
  useQuery(keys.getMovie(id), () => movieService.getMovie({ id }));
