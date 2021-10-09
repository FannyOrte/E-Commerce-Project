export type ProductPageArgsType = {
  slug: string;
  products: {
    id: string;
    name: string;
    price: {
      formatted_with_code: string;
    };
    image: {
      url: string;
    };
  }[];
};
