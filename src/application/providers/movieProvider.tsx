import { useContext } from "react";
import { createContextHelper } from "../../helpers/hooks/useContextHelper";
import { useMovie } from "../movie";
import { MovieContextValue, MovieProviderProps } from "./providers.props";

const MovieContext = createContextHelper<MovieContextValue>("MovieContext");

export const useCurrentMovie = () =>
  useContext<MovieContextValue>(MovieContext);

const MovieProvider = ({ children, id }: MovieProviderProps) => {
  const { data: movie, isLoading, isSuccess } = useMovie({ id: Number(id) });

  return (
    <MovieContext.Provider value={{ movie, isLoading, isSuccess }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
