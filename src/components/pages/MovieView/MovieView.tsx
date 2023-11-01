import { useParams } from "react-router-dom";
import MovieProvider from "../../../application/providers/movieProvider";
import { MovieCover } from "../../organisms/MovieCover/MovieCover";
import { AboutMovie } from "../../organisms/AboutMovie/AboutMovie";
import { MovieCast } from "../../organisms/MovieCast/MovieCast";
import { MovieDescription } from "../../molecules/MovieDescription/MovieDescription";
import { MovieTrailers } from "../../organisms/MovieTrailers/MovieTrailers";
import styles from "./MovieView.module.scss";

const MovieView = () => {
  const { id } = useParams();

  return (
    <MovieProvider id={id || 0}>
      <div className={styles.wrapper}>
        <MovieCover />
        <AboutMovie />
        <MovieCast />
        <MovieDescription />
        <MovieTrailers />
      </div>
    </MovieProvider>
  );
};

export default MovieView;
