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
      value: movie?.persons.filter((item) => item.enProfession === "director"),
    },
    {
      key: "Сценарий",
      value: movie?.persons.filter((item) => item.enProfession === "writer"),
    },
    {
      key: "Продюссер",
      value: movie?.persons.filter((item) => item.enProfession === "producer"),
    },
    {
      key: "Оператор",
      value: movie?.persons.filter((item) => item.enProfession === "operator"),
    },
    {
      key: "Композитор",
      value: movie?.persons.filter((item) => item.enProfession === "composer"),
    },
    {
      key: "Художник",
      value: movie?.persons.filter(
        (item) => item.enProfession === "designer" && !!item.name
      ),
    },
    {
      key: "Монтаж",
      value: movie?.persons.filter((item) => item.enProfession === "editor"),
    },
    {
      key: "Премьера в мире",
      value: dayjs(movie?.premiere.world).format("DD MMMM YYYY"),
    },
    {
      key: "Рейтинг MPAA",
      value: movie?.ratingMpaa,
    },
    {
      key: "Продолжительность",
      value: `${movie?.movieLength} мин.`,
    },
  ];

  return movieInfo;
};
