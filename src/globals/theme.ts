import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#52688F",
    },
    secondary: {
      main: "#D8D7D5",
    },
    text: {
      primary: "#FDFDFD",
      secondary: "#050606",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
