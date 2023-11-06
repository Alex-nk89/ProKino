import { memo } from "react";
import { useCurrentMovie } from "../../../application/providers/movieProvider";
import { Cover } from "../../molecules/Cover/Cover";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mantine/core";

export const MovieCover = memo(() => {
  const { movie, isLoading } = useCurrentMovie();
  const params = useParams();

  const cover = sessionStorage.getItem("cover");
  const isShowCover =
    cover && params.id === JSON.parse(cover).id.toString() && !movie;
  const coverProps = isShowCover ? { ...JSON.parse(cover) } : { ...movie };

  if (isLoading && !isShowCover) {
    return <Skeleton visible={true} height={500} />;
  }

  return <Cover {...coverProps} />;
});
