import { Svg } from "../Svg/Svg";
import LogoSvg from "./assets/ProKino-logo.svg";
import styles from "./Logo.module.scss";

export const Logo = () => (
  <Svg src={`${LogoSvg}#logo`} className={styles.logo} />
);
