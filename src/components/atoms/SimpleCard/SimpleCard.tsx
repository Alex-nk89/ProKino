import { memo } from "react";
import styles from "./SimpleCard.module.scss";
import { SimpleCardProps } from "./SimpleCard.props";
import { Text } from "@mantine/core";

export const SimpleCard = memo(
  ({ imgSrc, title, description }: SimpleCardProps) => {
    return (
      <div className={styles.container}>
        <img src={imgSrc} />
        {title && (
          <Text size="lg" lineClamp={2}>
            {title}
          </Text>
        )}
        {description && (
          <Text size="sm" lineClamp={4}>
            {description}
          </Text>
        )}
      </div>
    );
  }
);
