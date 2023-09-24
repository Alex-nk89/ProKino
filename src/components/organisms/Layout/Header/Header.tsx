import { useCallback, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import clsx from "clsx";

export const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const cnHeader = clsx(styles.wrapper, {
    [styles.isScrolling]: isScrolling,
  });

  const hideHeader = useCallback(
    () => setIsScrolling(window.scrollY > 100),
    []
  );

  useEffect(() => {
    document.addEventListener("scroll", hideHeader);

    return document.addEventListener("scroll", hideHeader);
  }, [hideHeader]);

  return <nav className={cnHeader}>Header</nav>;
};
