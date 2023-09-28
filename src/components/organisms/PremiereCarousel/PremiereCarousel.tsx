import { useMemo } from "react";
import { usePremieres } from "../../../application/films";
import { Months } from "../../../domains/common";

export const PremiereCarousele = () => {
  const dateNow = useMemo(() => new Date(), []);

  const { data: premiereList } = usePremieres({
    year: dateNow.getFullYear(),
    month: Object.values(Months)[dateNow.getMonth()],
  });

  return <div>123</div>;
};
