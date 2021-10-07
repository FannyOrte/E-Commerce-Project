import React, { useEffect, useState } from "react";
import { getProducts } from "../providers/Commerce/Commerce.provider";
import { IProductMeta } from "../providers/Commerce/Commerce.types";
import ProductTableComponent from "../components/ProductTable/ProductTable.component";

const ProductsPage = () => {
  const [products, setProducts] = useState<IProductMeta[] | null>(null);

  useEffect(() => {
    const sendRequest = async () => {
      const result = await getProducts();
      setProducts(result);
    };

    sendRequest();
  }, []);

  return (
    <div>
      {products && (
        <ProductTableComponent products={products}></ProductTableComponent>
      )}
    </div>
  );
};

export default ProductsPage;
