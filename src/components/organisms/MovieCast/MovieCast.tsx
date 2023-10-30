import { useMemo } from "react";
import { useCurrentMovie } from "../../../application/providers/movieProvider";
import { Container } from "../../atoms/Container/Container";
import styles from "./MovieCast.module.scss";
import { SimpleCard } from "../../atoms/SimpleCard/SimpleCard";
import { ScrollArea } from "@mantine/core";
import { Link } from "react-router-dom";

export const MovieCast = () => {
  const { movie } = useCurrentMovie();

  const castList = useMemo(
    () =>
      movie?.persons.filter(
        (item) => item.enProfession === "actor" && item.name
      ),
    [movie?.persons]
  );

  if (castList?.length === 0) {
    return null;
  }

  return (
    <Container title="Актеры">
      <ScrollArea className={styles.container}>
        <div className={styles.container}>
          {castList?.map((item) => (
            <Link to={`/person/${item.id}`}>
              <SimpleCard imgSrc={item.photo} title={item.name} />
            </Link>
          ))}
        </div>
      </ScrollArea>
    </Container>
  );
};
