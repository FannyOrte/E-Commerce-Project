import React from "react";
import ProductTableComponent from "../ProductTable/ProductTable.component";
import HeaderComponent from "../Header/Header.component";
import { ProductPageArgsType } from "./ProductPage.types";
import { PageProps } from "gatsby";

const ProductPageComponent = ({
  pageContext,
}: PageProps<{}, ProductPageArgsType>) => {
  console.log("product page");
  return (
    <div>
      <ProductTableComponent
        products={pageContext.products}
      ></ProductTableComponent>
    </div>
  );
};

export default ProductPageComponent;
