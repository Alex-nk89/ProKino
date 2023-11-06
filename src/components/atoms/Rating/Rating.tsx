import { Badge, DefaultMantineColor } from "@mantine/core";
import { RatingProps } from "./Rating.props";

export const Rating = ({ rating }: RatingProps) => {
  const ratingColor: DefaultMantineColor =
    rating < 6 ? "red" : rating >= 8 ? "green" : "yellow";

  return (
    <Badge radius="sm" size="lg" color={ratingColor}>
      {rating}
    </Badge>
  );
};
