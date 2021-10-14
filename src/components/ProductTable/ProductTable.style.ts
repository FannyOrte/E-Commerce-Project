import styled from "styled-components";
import theme from "../../globals/theme";

export const DivStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 15%;
  @media screen and (max-width: ${theme.breakpoints.values.md}px) {
    margin: 0;
  }
`;
