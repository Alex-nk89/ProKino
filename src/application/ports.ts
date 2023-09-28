import { PremieresList, PremieresRequestParams } from "../domains/films";

export interface FilmService {
  getPremieres(params: PremieresRequestParams): Promise<PremieresList>;
}
