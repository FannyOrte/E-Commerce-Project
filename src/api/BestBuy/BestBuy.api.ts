import { API_KEY } from "./BestBuy.utils";
import { ProductRequestReturnType } from "./BestBuy.types";

export const getProductRequest =
  async (): Promise<ProductRequestReturnType> => {
    try {
      const response = await fetch(
        `https://api.bestbuy.com/v1/products((categoryPath.id=abcat0204000))?apiKey=${API_KEY}&sort=name.asc&show=name,image,regularPrice,sku&format=json`,
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
