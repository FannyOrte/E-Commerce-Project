import { API_KEY } from "./BestBuy.utils";
import {
  ProductRequestArgType,
  ProductRequestReturnType,
} from "./BestBuy.types";
import { getCategoryID } from "./BestBuy.utils";

export const getProductRequest = async (
  category: ProductRequestArgType
): Promise<ProductRequestReturnType> => {
  const categoryID = getCategoryID(category);
  try {
    const response = await fetch(
      `https://api.bestbuy.com/v1/products((categoryPath.id=${categoryID}))?apiKey=${API_KEY}&sort=name.asc&show=name,image,regularPrice,sku&pageSize=25&format=json`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const result = await response.json();
    return result.products;
  } catch (error) {
    console.log(error);
    return null;
  }
};
