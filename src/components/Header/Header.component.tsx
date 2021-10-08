import React from "react";
import { LinkStyle } from "./Header.styles";
import { IPureHeaderArgs } from "./Header.types";
import { AppBar, Toolbar, Box, useTheme, useMediaQuery } from "@mui/material";
import DrawerMenuComponent from "../DrawerMenu/DrawerMenu.component";

const PureHeaderComponent = ({ isMedium }: IPureHeaderArgs) => {
  return (
    <div>
      <AppBar color="primary">
        <Box
          display={isMedium ? "flex" : "none"}
          justifyContent="space-between"
        >
          <DrawerMenuComponent />
        </Box>
        <Box
          margin="0 15%"
          display={isMedium ? "none" : "flex"}
          justifyContent="center"
        >
          <LinkStyle to="/face">Facial Products</LinkStyle>
          <LinkStyle to="/body">Body Products</LinkStyle>
        </Box>
      </AppBar>
      <Toolbar />
    </div>
  );
};

const HeaderComponent = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  return <PureHeaderComponent isMedium={isMedium} />;
};

export default HeaderComponent;
