import styled from "styled-components";
import theme from "../../globals/theme";
import { Link } from "gatsby";

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
