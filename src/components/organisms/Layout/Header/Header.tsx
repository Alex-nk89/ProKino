import styles from "./Header.module.scss";
import { MobileMenuButton, SearchField } from "..";
import { Logo } from "../../../atoms/Logo/Logo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { AppShell, Box } from "@mantine/core";
import { useLinksList } from "../../../../helpers/hooks/useLinksList";

export const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const { desktopLinksList } = useLinksList();

  const cnHeader = clsx(styles.wrapper, {
    [styles.isScrolling]: isScrolling,
  });

  const handleSetScrolling = () => setIsScrolling(window.scrollY > 200);

  useEffect(() => {
    document.addEventListener("scroll", handleSetScrolling);

    return document.addEventListener("scroll", handleSetScrolling);
  }, []);

  return (
    <AppShell.Header className={cnHeader}>
      <Link to="/" className={styles.link}>
        <Logo />
      </Link>
      <Box className={styles.linksList} visibleFrom="md">
        {desktopLinksList.map((item) => (
          <Link key={item.id} to={item.to}>
            {item.name}
          </Link>
        ))}
        <SearchField />
      </Box>
      <MobileMenuButton />
    </AppShell.Header>
  );
};
