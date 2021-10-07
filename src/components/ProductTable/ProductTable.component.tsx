import React from "react";
import { IProductTableComponentArgs } from "./ProductTable.types";
import { DivStyle } from "./ProductTable.style";
import CardComponent from "../Card/Card.component";

const ProductTableComponent = ({
  products,
}: IProductTableComponentArgs): JSX.Element => {
  return (
    <DivStyle>
      {products.map(({ id, name, price, image }) => {
        return (
          <CardComponent key={id} name={name} price={price} image={image} />
        );
      })}
    </DivStyle>
  );
};

export default ProductTableComponent;
