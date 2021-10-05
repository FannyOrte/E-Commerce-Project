import React from "react";
import { CardComponentArgs } from "./Card.types";
import { ImgStyle, DivStyle } from "./Card.styles";

const CardComponent = ({ name, regularPrice, image }: CardComponentArgs) => {
  return (
    <DivStyle>
      <ImgStyle src={image} />
      <p>{name}</p>
      <p>{regularPrice}$</p>
    </DivStyle>
  );
};

export default CardComponent;
