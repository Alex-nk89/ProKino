import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "https://api.kinopoisk.dev";

export const configureAxios = () => {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.headers.common["X-API-KEY"] =
    "Z60V7B7-DMBMPAG-NDVVHST-322JFT7";
  axios.defaults.headers.common["Content-Type"] = "application/json";
};

export const api = <T>(
  url: string,
  params: AxiosRequestConfig = {}
): Promise<T> => axios(url, params).then((response) => response.data as T);
