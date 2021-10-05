type CategoryType = "HeadPhones" | "Laptops";

export interface ProductRequestArgs {
  category: CategoryType;
}

export interface ProductMeta {
  name: string;
  image: string;
  regularPrice: number;
  sku: number;
}

export type ProductRequestReturnType = ProductMeta[];
