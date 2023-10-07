import { api } from ".";
import { PremiereService } from "../application/ports";
import { PremieresRequestParams } from "../domains/premiere";
import { getSelectFields } from "../utils/selectFields";

export const filmService: PremiereService = {
  getPremieres(params: PremieresRequestParams) {
    return api("/v1.3/movie", {
      method: "GET",
      params: {
        "premiere.world": params.premiereDate.filter(Boolean).join("-"),
        selectFields: getSelectFields().premiereValues.join(" "),
        "backdrop.url": "!null",
        "poster.url": "!null",
        name: "!null",
        limit: 50,
      },
    });
  },
};
