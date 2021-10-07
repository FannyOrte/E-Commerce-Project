import styled from "styled-components";
import { Link } from "gatsby";

export const DivStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 15%;
`;

export const LinkStyle = styled(Link)`
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-right: 1rem;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
