import React from "react";
import { DivStyle, LinkStyle } from "./Header.styles";

const HeaderComponent = () => {
  return (
    <DivStyle>
      <LinkStyle to="/face">Facial Products</LinkStyle>
      <LinkStyle to="/body">Body Products</LinkStyle>
    </DivStyle>
  );
};

export default HeaderComponent;
