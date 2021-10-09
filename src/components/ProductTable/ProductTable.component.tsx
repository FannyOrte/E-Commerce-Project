import React from "react";
import { IProductTableComponentArgs } from "./ProductTable.types";
import { DivStyle } from "./ProductTable.style";
import CardComponent from "../Card/Card.component";

const ProductTableComponent = ({
  products,
}: IProductTableComponentArgs): JSX.Element => {
  return (
    <DivStyle>
      {products.map(
        ({ id, name, price: { formatted_with_code }, image: { url } }) => {
          return (
            <CardComponent
              key={id}
              name={name}
              price={formatted_with_code}
              image={url}
            />
          );
        }
      )}
    </DivStyle>
  );
};

export default ProductTableComponent;
