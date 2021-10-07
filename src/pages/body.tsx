import React, { useEffect, useState } from "react";
import { getProducts } from "../providers/Commerce/Commerce.provider";
import { IProductMeta } from "../providers/Commerce/Commerce.types";
import ProductTableComponent from "../components/ProductTable/ProductTable.component";
import HeaderComponent from "../components/Header/Header.component";

const BodyPage = () => {
  const [products, setProducts] = useState<IProductMeta[] | null>(null);

  useEffect(() => {
    const sendRequest = async () => {
      const result = await getProducts({ category: "body-products" });
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

export default BodyPage;
