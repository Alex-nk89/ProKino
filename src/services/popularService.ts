import { api } from ".";
import { PopularService as PopularService } from "../application/ports";
import { PopularsRequestParams } from "../domains/populars";
import { getSelectFields } from "../utils/functions/selectFields";

export const filmService: PopularService = {
  getPremieres(params: PopularsRequestParams) {
    return api(
      `/v1.4/movie?${getSelectFields().premiereUrl}&${
        getSelectFields().premiereNotNullFileds
      }`,
      {
        method: "GET",
        params: {
          "premiere.world": params.premiereDate.filter(Boolean).join("-"),
          slug: "popular-films",
          limit: 20,
        },
      }
    );
  },
};
