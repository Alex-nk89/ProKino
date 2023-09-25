import styles from "./Header.module.scss";
import { MobileMenuButton } from "..";
import { Logo } from "../../../atoms/Logo/Logo";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <MobileMenuButton />
      <Link to="/">
        <Logo />
      </Link>
      <nav></nav>
    </header>
  );
};
