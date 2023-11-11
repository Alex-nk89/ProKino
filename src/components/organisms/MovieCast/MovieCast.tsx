import { useMemo } from "react";
import { useCurrentMovie } from "../../../application/providers/movieProvider";
import { Container } from "../../atoms/Container/Container";
import { SimpleCard } from "../../atoms/SimpleCard/SimpleCard";
import { Link } from "react-router-dom";
import { HorizontalList } from "../../atoms/HorizontalList/HorizontalList";
import { Skeleton } from "@mantine/core";

export const MovieCast = () => {
  const { movie, isLoading } = useCurrentMovie();

  const castList = useMemo(
    () =>
      movie?.persons.filter(
        (item) => item.enProfession === "actor" && item.name
      ),
    [movie?.persons]
  );

  if (isLoading) {
    return <Skeleton visible height={250} />;
  }

  if (castList?.length === 0) {
    return null;
  }

  return (
    <Container title="Актеры">
      <HorizontalList>
        {castList?.map((item) => (
          <Link to={`/person/${item.id}`}>
            <SimpleCard imgSrc={item.photo} title={item.name} />
          </Link>
        ))}
      </HorizontalList>
    </Container>
  );
};
