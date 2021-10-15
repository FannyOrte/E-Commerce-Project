import React from "react";
import face from "../../images/face.jpg";
import body from "../../images/body.jpg";
import { ImgStyle, LinkStyle } from "./CategoryBanner.styles";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import useSiteMetaHook from "../../hooks/SiteMeta/useSiteMeta.hook";

const CategoryBannerComponent = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const site = useSiteMetaHook();

  return (
    <Box
      display="flex"
      flexDirection={isSmall ? "column" : "row"}
      justifyContent={isSmall ? "flex-start" : "center"}
      mt="10%"
    >
      {site.siteMetadata.menuLinks.map(({ label, linkPath, key }) => {
        return (
          <LinkStyle to={linkPath} key={key}>
            <Box display="flex" justifyContent="center">
              <ImgStyle src={key == "facial-products" ? face : body} />
            </Box>

            <Box display="flex" justifyContent="center">
              <Typography variant="h6">{label}</Typography>
            </Box>
          </LinkStyle>
        );
      })}
    </Box>
  );
};

export default CategoryBannerComponent;
