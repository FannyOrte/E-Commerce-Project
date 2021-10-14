import styled, { keyframes } from "styled-components";
import { Box } from "@mui/material";
import theme from "../../globals/theme";
import { Link } from "gatsby";

const fadein = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const LinkStyle = styled(Link)`
  font-size: 1rem;
  letter-spacing: 2px;
  color: ${theme.palette.text.primary};
  text-transform: uppercase;
  margin: 1rem 1rem 1rem 0;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

export const LogoContainerStyle = styled(Box)`
  background-color: ${theme.palette.secondary.main};
`;

export const LogoStyle = styled.img`
  height: 35px;
  animation: ${fadein} 2s;
`;
