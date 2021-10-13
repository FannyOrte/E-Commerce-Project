import React from "react";
import ProductTableComponent from "../ProductTable/ProductTable.component";
import { ProductPageArgsType } from "./ProductPage.types";
import { PageProps } from "gatsby";

const ProductPageComponent = ({
  pageContext,
}: PageProps<{}, ProductPageArgsType>) => {
  return (
    <div>
      <ProductTableComponent
        products={pageContext.products}
      ></ProductTableComponent>
    </div>
  );
};

export default ProductPageComponent;
