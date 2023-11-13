import { useParams } from "react-router-dom";
import MovieProvider from "../../../application/providers/movieProvider";
import { MovieCover } from "../../organisms/MovieCover/MovieCover";
import { AboutMovie } from "../../organisms/AboutMovie/AboutMovie";
import { MovieCast } from "../../organisms/MovieCast/MovieCast";
import { MovieDescription } from "../../molecules/MovieDescription/MovieDescription";
import { MovieTrailers } from "../../organisms/MovieTrailers/MovieTrailers";
import styles from "./MovieView.module.scss";
import { MovieRating } from "../../organisms/MovieRating/MovieRating";
import { MovieFacts } from "../../organisms/MovieFacts/MovieFacts";

const MovieView = () => {
  const { id } = useParams();

  return (
    <MovieProvider id={id || 0}>
      <div className={styles.wrapper}>
        <MovieCover />
        <div className={styles.info}>
          <MovieDescription />
          <MovieRating />
        </div>
        <MovieCast />
        <AboutMovie />
        <MovieTrailers />
        <MovieFacts />
      </div>
    </MovieProvider>
  );
};

export default MovieView;
