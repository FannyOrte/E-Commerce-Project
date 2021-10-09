import React, { useState } from "react";
import { IconButton, List, ListItem, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "gatsby";
import { SwipeableDrawerStyle, TextStyle } from "./DrawerMenu.styles";
import useSiteMetaHook from "../../hooks/SiteMeta/useSiteMeta.hook";

const DrawerMenuComponent = () => {
  const [open, setOpen] = useState(false);
  const site = useSiteMetaHook();

  return (
    <div>
      <IconButton color="secondary" onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawerStyle
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Box display="flex" justifyContent="flex-end" margin="10px">
          <IconButton color="secondary" onClick={() => setOpen(false)}>
            <CloseIcon data-testid="drawer-close-icon" fontSize="large" />
          </IconButton>
        </Box>
        <List>
          {site.siteMetadata.menuLinks.map(({ label, linkPath, key }) => {
            return (
              <ListItem button component={Link} to={linkPath} key={key}>
                <TextStyle>{label}</TextStyle>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawerStyle>
    </div>
  );
};

export default DrawerMenuComponent;
