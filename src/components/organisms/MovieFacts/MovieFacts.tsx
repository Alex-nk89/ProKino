import { ScrollArea, Skeleton } from "@mantine/core";
import { Container } from "../../atoms/Container/Container";
import { useCurrentMovie } from "../../../application/providers/movieProvider";
import styles from "./MovieFacts.module.scss";
import { TextContainer } from "../../atoms/TextContainer/TextContainer";
import {
  removeLink,
  replaceQuotationMark,
} from "../../../utils/functions/removeTags";

export const MovieFacts = () => {
  const { movie, isLoading } = useCurrentMovie();

  if (isLoading) {
    <Skeleton visible height={400} />;
  }

  if (movie?.facts.length === 0) {
    return null;
  }

  return (
    <Container title="Знаете ли вы, что...">
      <ScrollArea>
        <div className={styles.container}>
          {movie?.facts.map((item) => (
            <Container withBackground classname={styles.factCard}>
              <TextContainer
                key={item.value}
                text={replaceQuotationMark(removeLink(item.value))}
                lineClamp={10}
              />
            </Container>
          ))}
        </div>
      </ScrollArea>
    </Container>
  );
};
