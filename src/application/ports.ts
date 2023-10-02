import { PremieresList, PremieresRequestParams } from "../domains/premiere";

export interface PremiereService {
  getPremieres(params: PremieresRequestParams): Promise<PremieresList>;
}
