import React from "react";
import { ProductTableComponentArgs } from "./ProductTable.types";
import { DivStyle } from "./ProductTable.style";
import CardComponent from "../Card/Card.component";

const ProductTableComponent = ({
  products,
}: ProductTableComponentArgs): JSX.Element => {
  return (
    <DivStyle>
      {products.map(({ name, regularPrice, image, sku }) => {
        return (
          <CardComponent
            key={sku}
            name={name}
            regularPrice={regularPrice}
            image={image}
          />
        );
      })}
    </DivStyle>
  );
};

export default ProductTableComponent;
