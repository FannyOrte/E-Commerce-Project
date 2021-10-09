import React from "react";
import { LinkStyle } from "./Header.styles";
import { IPureHeaderArgs } from "./Header.types";
import { AppBar, Toolbar, Box, useTheme, useMediaQuery } from "@mui/material";
import DrawerMenuComponent from "../DrawerMenu/DrawerMenu.component";
import useSiteMetaHook from "../../hooks/SiteMeta/useSiteMeta.hook";

const PureHeaderComponent = ({ isMedium }: IPureHeaderArgs) => {
  const site = useSiteMetaHook();
  return (
    <div>
      <AppBar color="primary">
        <Box
          display={isMedium ? "none" : "flex"}
          justifyContent="space-between"
        >
          <DrawerMenuComponent />
        </Box>
        <Box
          margin="0 15%"
          display={isMedium ? "flex" : "none"}
          justifyContent="center"
        >
          {site.siteMetadata.menuLinks.map(({ label, linkPath, key }) => {
            return (
              <LinkStyle to={linkPath} key={key}>
                {label}
              </LinkStyle>
            );
          })}
        </Box>
      </AppBar>
      <Toolbar />
    </div>
  );
};

const HeaderComponent = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.up("md"));
  return <PureHeaderComponent isMedium={isMedium} />;
};

export default HeaderComponent;
