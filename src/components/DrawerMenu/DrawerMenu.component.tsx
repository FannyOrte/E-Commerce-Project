import React, { useState } from "react";
import { IconButton, List, ListItem, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "gatsby";
import { SwipeableDrawerStyle, TextStyle } from "./DrawerMenu.styles";

const DrawerMenuComponent = () => {
  const [open, setOpen] = useState(false);

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
        <Box display="flex" justifyContent="flex-end" marginBottom="10px">
          <IconButton color="secondary" onClick={() => setOpen(false)}>
            <CloseIcon data-testid="drawer-close-icon" fontSize="large" />
          </IconButton>
        </Box>
        <List>
          <ListItem button component={Link} to="/face">
            <TextStyle>Facial Products</TextStyle>
          </ListItem>
          <ListItem button component={Link} to="/body">
            <TextStyle> Body Products</TextStyle>
          </ListItem>
        </List>
      </SwipeableDrawerStyle>
    </div>
  );
};

export default DrawerMenuComponent;
