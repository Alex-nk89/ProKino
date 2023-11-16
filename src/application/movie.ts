import { useInfiniteQuery, useQuery } from "react-query";
import { keys } from "./queryKeys";
import { movieService } from "../services/movieService";
import { MovieResponse } from "../domains/movie";
import { ApiMethodParameters } from "../utils/interfaceHelper/apiMethodParams";

export const useMovie = ({ id }: MovieResponse) =>
  useQuery(keys.getMovie(id), () => movieService.getMovie({ id }));

export const useGetMovieImage = (
  params: ApiMethodParameters<typeof movieService.getMovieImageList>
) => {
  const { id, limit = 10, page = 0 } = params;

  return useInfiniteQuery(
    keys.getMovieImageList(id),
    ({ pageParam = page }) =>
      movieService.getMovieImageList({ ...params, limit, page: pageParam }),
    {
      getNextPageParam: (lastPage, allPages) =>
        lastPage.docs.length < limit ? false : allPages.length * limit,
    }
  );
};
