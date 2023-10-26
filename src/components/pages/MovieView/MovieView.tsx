import { useParams } from "react-router-dom";
import { useMovie } from "../../../application/movie";
import { Cover } from "../../molecules/Cover/Cover";
import styles from "./MovieView.module.scss";

export const MovieView = () => {
  const { id } = useParams();
  const { data: movie, isLoading, isSuccess } = useMovie({ id: Number(id) });

  console.log(movie);

  return (
    <div className={styles.wrapper}>
      <div>
        {movie && <Cover {...movie} premiere={undefined} isMoviePage />}
      </div>
    </div>
  );
};
