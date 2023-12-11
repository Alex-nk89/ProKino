import { useCallback, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetMovieImage } from "../../../application/movie";
import { ModalGallery } from "../../molecules/ModalGallery/ModalGallery";
import { convertMovieImageToFile } from "../../../utils/functions/convertUtils";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { InfiniteList } from "../../molecules/InfiniteList/InfiniteList";
import { MovieImage } from "../../../domains/movie";
import styles from "./GalleryView.module.scss";

const GalleryView = () => {
  const { id } = useParams();
  const [opened, { open, close }] = useDisclosure();
  const isMobile = useMediaQuery("(max-width: 900px");
  const [activeImage, setActiveImage] = useState(0);

  const { data, fetchNextPage, hasNextPage } = useGetMovieImage({
    id: Number(id),
    limit: 12,
  });

  const imageList = useMemo(
    () =>
      data?.pages
        .flat()
        .map((item) => item.docs)
        .flat(),
    [data?.pages]
  );

  const hasImages = !!imageList?.length;

  const handleOpenModalGallery = useCallback(
    (id: number) => {
      setActiveImage(id);
      open();
    },
    [open]
  );

  return (
    <>
      {hasImages && (
        <ModalGallery
          galleryList={convertMovieImageToFile(imageList, isMobile)}
          opened={opened}
          onClose={close}
          startIndex={activeImage}
        />
      )}
      {imageList && (
        <InfiniteList<MovieImage>
          next={fetchNextPage}
          list={imageList}
          hasMore={!!hasNextPage}
          className={styles.list}
          renderItem={(item, index) => (
            <img
              key={index}
              src={item.previewUrl}
              onClick={() => handleOpenModalGallery(index)}
            />
          )}
        />
      )}
    </>
  );
};

export default GalleryView;
