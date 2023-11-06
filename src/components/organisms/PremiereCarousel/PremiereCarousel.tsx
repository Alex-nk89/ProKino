import { useCallback } from "react";
import { usePremieres } from "../../../application/films";
import { Carousel } from "../../molecules/Carousel/Carousel";
import { Cover } from "../../molecules/Cover/Cover";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

export const PremiereCarousele = () => {
  const { data: premiereList } = usePremieres({
    premiereDate: [
      dayjs().format("DD.MM.YYYY"),
      dayjs().add(14, "day").format("DD.MM.YYYY"),
    ],
  });

  const handleClick = useCallback(
    (index: number) =>
      sessionStorage.setItem(
        "cover",
        JSON.stringify(premiereList?.docs.at(index))
      ),
    [premiereList?.docs]
  );

  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >
      {premiereList?.docs.map((item, index) => (
        <Link
          to={`/movie/${item.id}`}
          key={item.id}
          onClick={() => handleClick(index)}
        >
          <Cover {...item} />
        </Link>
      ))}
    </Carousel>
  );
};
