import React from "react";
import { LinkStyle, LogoStyle, LogoContainerStyle } from "./Header.styles";
import { AppBar, Toolbar, Box, useTheme, useMediaQuery } from "@mui/material";
import DrawerMenuComponent from "../DrawerMenu/DrawerMenu.component";
import useSiteMetaHook from "../../hooks/SiteMeta/useSiteMeta.hook";
import desktopLogo from "../../images/desktopLogo.svg";
import mobileLogo from "../../images/mobileLogo.svg";
import { Link } from "gatsby";

const HeaderComponent = () => {
  const site = useSiteMetaHook();
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const islarge = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div>
      <AppBar color="primary" position="fixed">
        <Box
          display={isMedium ? "flex" : "none"}
          justifyContent="space-between"
        >
          <Link to="/">
            <LogoStyle src={mobileLogo} />
          </Link>
          <DrawerMenuComponent />
        </Box>

        <LogoContainerStyle
          display={islarge ? "flex" : "none"}
          justifyContent="center"
          pb="10px"
        >
          <Link to="/">
            <LogoStyle src={desktopLogo} />
          </Link>
        </LogoContainerStyle>

        <Box
          margin="0 15%"
          display={islarge ? "flex" : "none"}
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

export default HeaderComponent;
