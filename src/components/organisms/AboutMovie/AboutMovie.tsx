import { memo } from "react";
import { Container } from "../../atoms/Container/Container";
import { Text } from "@mantine/core";
import styles from "./AboutMovie.module.scss";
import { useAboutMovie } from "../../../utils/hooks/useAboutMovie";
import { MovieInfoProps } from "../../../domains/movie";
import { Person } from "../../../domains/common";
import { Link } from "react-router-dom";

const isPerson = (value: MovieInfoProps["value"]): value is Person[] =>
  typeof value === "object";

export const AboutMovie = memo(() => {
  const movieInfo = useAboutMovie();

  return (
    <Container title="О фильме">
      <div className={styles.movieInfo}>
        {movieInfo.map((item, index) => (
          <div key={index}>
            <Text>{item.key}</Text>
            {isPerson(item.value) ? (
              <div className={styles.links}>
                {item.value.map((item, index) => (
                  <Link key={index} to={`/person/${item.id}`}>
                    <Text>{item.name}</Text>
                  </Link>
                ))}
              </div>
            ) : (
              <Text>{item.value}</Text>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
});
