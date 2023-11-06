import * as colors from "@mui/material/colors";

export const createCssVars = () => {
  Object.assign(document.documentElement, {
    style: `
        --grey-50: ${colors.grey[50]}
    `,
  });
};
