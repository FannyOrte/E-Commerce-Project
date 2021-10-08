import styled from "styled-components";
import theme from "../../globals/theme";
import { SwipeableDrawer } from "@mui/material";

export const SwipeableDrawerStyle = styled(SwipeableDrawer)`
  .MuiDrawer-paper {
    background-color: ${theme.palette.primary.main};
  }
  @media screen and (max-width: ${theme.breakpoints.values.md}px) {
    .MuiDrawer-paper {
      min-width: 60vw;
    }
  }
  @media screen and (max-width: ${theme.breakpoints.values.sm}px) {
    .MuiDrawer-paper {
      min-width: 100vw;
    }
  }
`;

export const TextStyle = styled.p`
  margin: 10px 20px;
  font-size: 1rem;
  letter-spacing: 2px;
  color: ${theme.palette.text.primary};
  text-transform: uppercase;
  :hover {
    text-decoration: underline;
  }
`;
