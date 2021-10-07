import styled from "styled-components";
import { breakpoints } from "../../globals/breakpoints";

export const DivStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 15%;
  @media screen and (max-width: ${breakpoints.me}) {
    margin: 0;
  }
`;
