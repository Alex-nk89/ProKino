import { api } from ".";
import { FilmService } from "../application/ports";

const API_2_2_FILMS = "/api/v2.2/films";

export const filmService: FilmService = {
  getPremieres() {
    return api(`${API_2_2_FILMS}/premieres`, {
      method: "GET",
    });
  },
};
