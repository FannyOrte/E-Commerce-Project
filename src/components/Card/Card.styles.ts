import styled from "styled-components";
import { breakpoints } from "../../globals/breakpoints";

export const ImgStyle = styled.img`
  max-width: 100%;
`;

export const CardContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-sizing: border-box;
  padding: 0.7rem;
  border: 1px solid #ddd;
  width: 20%;
  @media screen and (max-width: ${breakpoints.me}) {
    width: 50%;
  }
  @media screen and (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;
