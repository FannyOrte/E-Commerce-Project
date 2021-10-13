import styled from "styled-components";
import theme from "../../globals/theme";

export const ImgStyle = styled.img`
  max-width: 100%;
`;

export const CardContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  padding: 0.7rem;
  margin: 0.5rem;
  width: 20%;
  @media screen and (max-width: ${theme.breakpoints.values.md}px) {
    width: 40%;
  }
  @media screen and (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100%;
    margin: 0 0 1rem;
  }
`;
