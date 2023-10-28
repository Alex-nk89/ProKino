import { forwardRef } from "react";
import { ContainerProps } from "./Container.props";
import styles from "./Container.module.scss";
import clsx from "clsx";

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, classname }, ref) => {
    const cn = clsx(styles.wrapper, classname);

    return (
      <div ref={ref} className={cn}>
        {children}
      </div>
    );
  }
);
