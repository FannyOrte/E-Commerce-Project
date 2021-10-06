export const API_KEY = process.env.GATSBY_API_KEY;
import { ProductRequestArgType } from "./BestBuy.types";

export const getCategoryID = (category: ProductRequestArgType) => {
  switch (category) {
    case "headphones":
      return "abcat0204000";
    case "cameras":
      return "abcat0401000";
    case "laptops":
      return "abcat0502000";
  }
};
