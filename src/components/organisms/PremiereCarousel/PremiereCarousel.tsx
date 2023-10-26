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

  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >
      {premiereList?.docs.map((item) => (
        <Link to={`/movie/${item.id}`} key={item.id}>
          <Cover {...item} />
        </Link>
      ))}
    </Carousel>
  );
};
