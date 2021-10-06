export type ProductRequestArgType = "headphones" | "laptops" | "cameras";

export interface IProductMeta {
  name: string;
  image: string;
  regularPrice: number;
  sku: number;
}

export type ProductRequestReturnType = IProductMeta[] | null;
