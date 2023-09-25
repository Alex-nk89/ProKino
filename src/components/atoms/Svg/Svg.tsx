interface Props {
  src: string;
  className?: string;
}

export const Svg = ({ src, className }: Props) => (
  <svg className={className}>
    <use xlinkHref={src} />
  </svg>
);
