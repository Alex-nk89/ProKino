import { forwardRef } from "react";
import { ContainerProps } from "./Container.props";
import styles from "./Container.module.scss";
import clsx from "clsx";
import { Title } from "@mantine/core";

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, classname, title, withBackground }, ref) => {
    const cn = clsx(styles.wrapper, classname, {
      [styles.withBackground]: withBackground,
    });

    return (
      <div ref={ref} className={cn}>
        {title && (
          <Title order={4} className={styles.title}>
            {title}
          </Title>
        )}
        {children}
      </div>
    );
  }
);
