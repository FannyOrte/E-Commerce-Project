import Commerce from "@chec/commerce.js";
import { API_KEY } from "./Commerce.utils";
import { IProductMeta } from "./Commerce.types";

const commmerce = new Commerce(API_KEY);

export const getProducts = async (): Promise<IProductMeta[] | null> => {
  try {
    const response = await commmerce.products.list();
    const data = response.data;

    // @ts-ignore: types not updated for image
    return data.map(({ id, name, price, image }) => {
      return {
        id: id,
        name: name,
        price: price.formatted_with_code,
        image: image.url as string,
      };
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
