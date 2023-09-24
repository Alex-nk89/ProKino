import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import { Header } from "..";

interface Props extends PropsWithChildren {}

export const AppDecorator = ({ children }: Props) => {
  return (
    <Box sx={{ height: "120vh" }}>
      <Header />
      {children}
    </Box>
  );
};
