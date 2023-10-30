import { useParams } from "react-router-dom";
import styles from "./MovieView.module.scss";
import MovieProvider from "../../../application/providers/movieProvider";
import { MovieCover } from "../../organisms/MovieCover/MovieCover";
import { AboutMovie } from "../../organisms/AboutMovie/AboutMovie";
import { MovieCast } from "../../organisms/MovieCast/MovieCast";

const MovieView = () => {
  const { id } = useParams();

  return (
    <MovieProvider id={id || 0}>
      <div className={styles.wrapper}>
        <MovieCover />
        <MovieCast />
        <AboutMovie />
      </div>
    </MovieProvider>
  );
};

export default MovieView;
