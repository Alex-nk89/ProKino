import { Box, Burger } from "@mantine/core";
import styles from "./MobileMenuButton.module.scss";
import { useDisclosure } from "@mantine/hooks";
import { MobileMenu } from "../../../molecules/MobileMenu/MobileMenu";

export const MobileMenuButton = () => {
  const [isOpen, { open, close }] = useDisclosure();

  return (
    <>
      <Box hiddenFrom="md" className={styles.wrapper}>
        <Burger onClick={open} />
      </Box>
      <MobileMenu isOpened={isOpen} onClose={close} />
    </>
  );
};
