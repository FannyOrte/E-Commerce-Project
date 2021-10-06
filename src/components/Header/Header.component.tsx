import React from "react";
import { DivStyle, LinkStyle } from "./Header.styles";

const HeaderComponent = () => {
  return (
    <DivStyle>
      <LinkStyle to="/headphones">Headphones</LinkStyle>
      <LinkStyle to="/laptops">Laptops</LinkStyle>
      <LinkStyle to="/cameras">Cameras</LinkStyle>
    </DivStyle>
  );
};

export default HeaderComponent;
