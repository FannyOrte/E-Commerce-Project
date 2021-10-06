export interface ProductMeta {
  name: string;
  image: string;
  regularPrice: number;
  sku: number;
}

export type ProductRequestReturnType = ProductMeta[] | null;
