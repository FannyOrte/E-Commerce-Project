export interface IProductMeta {
  id: string;
  name: string;
  price: string;
  image: string;
}

export type CategoryType = "body-products" | "facial-products";

export interface IGetProductsArgs {
  category: CategoryType;
}
