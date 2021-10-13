import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/globals/theme";
import HeaderComponent from "../../src/components/Header/Header.component";

const TopLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderComponent />
      {children}
    </ThemeProvider>
  );
};

export default TopLayout;
