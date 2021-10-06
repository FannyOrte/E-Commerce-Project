import React, { useEffect, useState } from "react";
import { getProductRequest } from "../api/BestBuy/BestBuy.api";
import { ProductRequestReturnType } from "../api/BestBuy/BestBuy.types";
import ProductTableComponent from "../components/ProductTable/ProductTable.component";
import HeaderComponent from "../components/Header/Header.component";

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductRequestReturnType>(null);

  useEffect(() => {
    const sendRequest = async () => {
      const result = await getProductRequest();
      console.log(result);
      setProducts(result);
    };

    sendRequest();
  }, []);

  return (
    <div>
      <HeaderComponent />
      {products && (
        <ProductTableComponent products={products}></ProductTableComponent>
      )}
    </div>
  );
};

export default ProductsPage;
