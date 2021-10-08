import styled from "styled-components";
import theme from "../../globals/theme";

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
  width: 25%;
  @media screen and (max-width: ${theme.breakpoints.values.md}px) {
    width: 50%;
  }
  @media screen and (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100%;
  }
`;
