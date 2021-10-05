import React from "react";
import { getProductRequest } from "../api/BestBuy/BestBuy.api";
import LayoutComponent from "../components/Layout/Layout.component";
import ProductTableComponent from "../components/ProductTable/ProductTable.component";

const ProductsPage = () => {
  const products = getProductRequest();

  return (
    <LayoutComponent>
      <ProductTableComponent products={products}></ProductTableComponent>
    </LayoutComponent>
  );
};

export default ProductsPage;
