import { Modal } from "@mantine/core";
import { ModallGalleryProps } from "./ModalGallery.props";
import { Carousel } from "../Carousel/Carousel";
import styles from "./ModalGallery.module.scss";

export const ModalGallery = (props: ModallGalleryProps) => {
  const { opened, onClose, galleryList, startIndex } = props;

  const isShowArrow = galleryList.length > 1;

  return (
    <Modal opened={opened} onClose={onClose} centered size="auto">
      <Carousel
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        className={styles.container}
        selectedItem={startIndex}
        showArrows={isShowArrow}
      >
        {galleryList.map((item) => (
          <img key={item.id} src={item.src} loading="lazy" />
        ))}
      </Carousel>
    </Modal>
  );
};
