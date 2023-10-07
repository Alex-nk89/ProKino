import { CarouselProps } from "./Carousel.props";
import { Carousel as CarouselKit } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Carousel = (props: CarouselProps) => {
  const handleNext = (clickHandler: () => void) => (
    <div onClick={clickHandler}>+++</div>
  );
  const handlePrevious = () => <div>---</div>;

  return (
    <CarouselKit
      {...props}
      renderArrowNext={handleNext}
      renderArrowPrev={handlePrevious}
    />
  );
};
