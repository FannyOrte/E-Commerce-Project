import React from "react";
import { DivStyle, LinkStyle } from "./Header.styles";

const HeaderComponent = () => {
  return (
    <DivStyle>
      <LinkStyle to="/products">Headphones</LinkStyle>
      <LinkStyle to="/products">Laptops</LinkStyle>
      <LinkStyle to="/products">Cameras</LinkStyle>
    </DivStyle>
  );
};

export default HeaderComponent;
