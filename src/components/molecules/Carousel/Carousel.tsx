import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { CarouselProps } from "./Carousel.props";
import { Carousel as CarouselKit } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Carousel.module.scss";
import clsx from "clsx";
import { ActionIcon } from "@mantine/core";

export const Carousel = (props: CarouselProps) => {
  const handleNext = (clickHandler: () => void) => (
    <div className={clsx(styles.toggleButton, styles.nextButton)}>
      <ActionIcon variant="subtle" onClick={clickHandler}>
        <IconChevronRight />
      </ActionIcon>
    </div>
  );

  const handlePrevious = (clickHandler: () => void) => (
    <div className={styles.toggleButton}>
      <ActionIcon variant="subtle" onClick={clickHandler}>
        <IconChevronLeft />
      </ActionIcon>
    </div>
  );

  return (
    <CarouselKit
      {...props}
      renderArrowNext={handleNext}
      renderArrowPrev={handlePrevious}
    />
  );
};
