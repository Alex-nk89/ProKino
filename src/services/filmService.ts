import { api } from ".";
import { FilmService } from "../application/ports";
import { PremieresRequestParams } from "../domains/films";

const API_2_2_FILMS = "/api/v2.2/films";

export const filmService: FilmService = {
  getPremieres(params: PremieresRequestParams) {
    return api(`${API_2_2_FILMS}/premieres`, {
      method: "GET",
      params,
    });
  },
};
