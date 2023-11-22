import { Link } from "react-router-dom";
import { useGetMovieImage } from "../../../application/movie";
import { Container } from "../../atoms/Container/Container";
import { HorizontalList } from "../../atoms/HorizontalList/HorizontalList";
import { ImageListProps } from "./ImageList.props";
import { Image, NavLink, Skeleton } from "@mantine/core";
import { ModalGallery } from "../../molecules/ModalGallery/ModalGallery";
import { useCallback, useMemo, useState } from "react";
import { getGaleryListFromMovieImage } from "../../../utils/functions/getGaleryList";
import styles from "./ImageList.module.scss";
import { useDisclosure } from "@mantine/hooks";

export const ImageList = ({ id }: ImageListProps) => {
  const [opened, { open, close }] = useDisclosure();
  const { data: imageList, isLoading, isSuccess } = useGetMovieImage({ id });

  const [activeImage, setActiveImage] = useState(0);

  const galleryList = useMemo(
    () => imageList && getGaleryListFromMovieImage(imageList?.pages[0].docs),
    [imageList]
  );

  const handleOpenModalGallery = useCallback(
    (id: number) => {
      setActiveImage(id);
      open();
    },
    [open]
  );

  return (
    <Container>
      {isLoading && <Skeleton visible height={240} />}
      {isSuccess && (
        <>
          <HorizontalList className={styles.list}>
            {isSuccess && (
              <>
                {imageList.pages[0].docs.map((item, index) => (
                  <Image
                    key={item.id}
                    src={item.previewUrl}
                    height={250}
                    onClick={() => handleOpenModalGallery(index)}
                    loading="lazy"
                  />
                ))}
                {imageList.pages[0].total > imageList.pages[0].docs.length && (
                  <NavLink
                    component={Link}
                    to={`/movie/${id}/images`}
                    label="Еще"
                  />
                )}
                {galleryList && (
                  <ModalGallery
                    galleryList={galleryList}
                    opened={opened}
                    onClose={close}
                    startIndex={activeImage}
                  />
                )}
              </>
            )}
          </HorizontalList>
        </>
      )}
    </Container>
  );
};
