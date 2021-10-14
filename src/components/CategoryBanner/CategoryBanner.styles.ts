import styled from "styled-components";
import { Link } from "gatsby";
import theme from "../../globals/theme";

export const ImgStyle = styled.img`
  max-width: 100%;
  max-height: 426px;
`;

export const LinkStyle = styled(Link)`
  margin: 5px;
  text-decoration: none;
  color: ${theme.palette.text.secondary};
`;
