import React from "react";
import { CardComponentArgs } from "./Card.types";
import { ImgStyle, CardContainerStyle } from "./Card.styles";

const CardComponent = ({ name, regularPrice, image }: CardComponentArgs) => {
  return (
    <CardContainerStyle>
      <ImgStyle src={image} />
      <div>
        <p>{name}</p>
        <p>{regularPrice}$</p>
      </div>
    </CardContainerStyle>
  );
};

export default CardComponent;
