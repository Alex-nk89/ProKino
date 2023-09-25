import { PremieresList } from "../domains/films";

export interface FilmService {
  getPremieres(): Promise<PremieresList>;
}
