import { PremiereSlideProps } from "./PremiereSlide.props";
import styles from "./PremiereSlide.module.scss";
import { Box, Typography } from "@mui/material";

export const PremiereSlide = (props: PremiereSlideProps) => {
  const { backdrop, name, poster } = props;

  return (
    <>
      <Box
        id="premiereSlide"
        className={styles.container}
        sx={{
          backgroundImage: {
            xs: `url("${poster.previewUrl}")`,
            md: `url("${backdrop.previewUrl}")`,
          },
        }}
      >
        <div className={styles.info}>
          <Typography variant="h1" className={styles.title}>
            {name}
          </Typography>
        </div>
      </Box>
    </>
  );
};
