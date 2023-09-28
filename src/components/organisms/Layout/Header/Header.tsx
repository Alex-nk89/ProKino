import styles from "./Header.module.scss";
import { MobileMenuButton } from "..";
import { Logo } from "../../../atoms/Logo/Logo";
import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";
import { useEffect, useState } from "react";
import clsx from "clsx";

export const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const cnHeader = clsx(styles.wrapper, {
    [styles.isScrolling]: isScrolling,
  });

  const handleSetScrolling = () => setIsScrolling(window.scrollY > 200);

  useEffect(() => {
    document.addEventListener("scroll", handleSetScrolling);

    return document.addEventListener("scroll", handleSetScrolling);
  }, []);

  return (
    <AppBar
      component="header"
      className={cnHeader}
      sx={{ flexDirection: "initial" }}
    >
      <Link to="/" className={styles.link}>
        <Logo />
      </Link>
      <MobileMenuButton />
    </AppBar>
  );
};
