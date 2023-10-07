import { Carousel } from "react-responsive-carousel";
import { ComponentProps } from "react";

export interface CarouselProps
  extends Partial<ComponentProps<typeof Carousel>> {}
