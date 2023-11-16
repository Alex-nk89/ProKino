import dayjs from "dayjs";
import { useCurrentMovie } from "../../application/providers/movieProvider";
import { MovieInfoProps } from "../../domains/movie";

export const useAboutMovie = () => {
  const { movie } = useCurrentMovie();

  const movieInfo: MovieInfoProps[] = [
    {
      key: "Год производства",
      value: movie?.year,
    },
    {
      key: "Страна",
      value: movie?.countries.map((item) => item.name).join(", "),
    },
    {
      key: "Жанр",
      value: movie?.genres.map((item) => item.name).join(", "),
    },
    {
      key: "Режиссер",
      value: movie?.persons.filter(
        (item) => item.enProfession === "director" && !!item.name
      ),
    },
    {
      key: "Сценарий",
      value: movie?.persons.filter(
        (item) => item.enProfession === "writer" && !!item.name
      ),
    },
    {
      key: "Продюссер",
      value: movie?.persons.filter(
        (item) => item.enProfession === "producer" && !!item.name
      ),
    },
    {
      key: "Оператор",
      value: movie?.persons.filter(
        (item) => item.enProfession === "operator" && !!item.name
      ),
    },
    {
      key: "Композитор",
      value: movie?.persons.filter(
        (item) => item.enProfession === "composer" && !!item.name
      ),
    },
    {
      key: "Художник",
      value: movie?.persons.filter(
        (item) => item.enProfession === "designer" && !!item.name
      ),
    },
    {
      key: "Монтаж",
      value: movie?.persons.filter(
        (item) => item.enProfession === "editor" && !!item.name
      ),
    },
    {
      key: "Премьера в России",
      value: dayjs(movie?.premiere.russia).format("DD MMMM YYYY"),
    },
    {
      key: "Премьера в мире",
      value: dayjs(movie?.premiere.world).format("DD MMMM YYYY"),
    },
    {
      key: "Рейтинг MPAA",
      value: movie?.ratingMpaa ?? "-",
    },
    {
      key: "Время",
      value: movie?.movieLength ? `${movie?.movieLength} мин.` : "-",
    },
  ];

  return movieInfo;
};
