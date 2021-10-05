import styled from "styled-components";
import { breakpoints } from "../../globals/breakpoints";

export const ImgStyle = styled.img`
  max-width: 100%;
  padding: 0.5rem;
`;

export const DivStyle = styled.div`
  width: 15%;
  padding: 0 0.7rem;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
  @media screen and (max-width: ${breakpoints.me}) {
    width: 40%;
  }
  @media screen and (max-width: ${breakpoints.sm}) {
    width: 80%;
  }
`;
