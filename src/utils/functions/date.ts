import dayjs from "dayjs";
import { Premiere } from "../../domains/common";

export const getDatePremiere = (date: Premiere) => {
  const format = "D MMMM";

  if (date.russia) {
    return `Премьера в России ${dayjs(date.russia).format(format)}`;
  }

  if (date.world) {
    return `Мировая премьера ${dayjs(date.world).format(format)}`;
  }
};

export const getHours = (minutesInterval: number) =>
  parseInt((minutesInterval / 60).toString());

export const getMinutes = (minutesInterval: number) => {
  const hours = getHours(minutesInterval);

  return minutesInterval - Number(hours) * 60;
};
