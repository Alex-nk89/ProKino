import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

export const MobileMenuButton = () => {
  return (
    <IconButton sx={{ display: { md: "none" } }}>
      <Menu />
    </IconButton>
  );
};
