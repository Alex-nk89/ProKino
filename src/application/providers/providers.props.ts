import { PropsWithChildren } from "react";
import { Movie } from "../../domains/movie";

export interface MovieContextValue {
  movie?: Movie;
  isLoading: boolean;
  isSuccess: boolean;
}

export interface MovieProviderProps extends PropsWithChildren<unknown> {
  id: number | string;
}
