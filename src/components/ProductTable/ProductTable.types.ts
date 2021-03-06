export interface IProductTableComponentArgs {
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
}
