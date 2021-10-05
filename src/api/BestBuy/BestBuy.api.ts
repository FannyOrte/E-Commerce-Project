import { API_KEY } from "./BestBuy.utils";
import { ProductRequestArgs, ProductRequestReturnType } from "./BestBuy.types";

/* export const getProductRequest = async ({
  category,
}: ProductRequestArgs): Promise<ProductRequestReturnType> => {
  try {
    const response = await fetch(
      `https://api.bestbuy.com/v1/products((categoryPath.id=abcat0204000))?apiKey=${API_KEY}&sort=name.asc&show=name,image,regularPrice&format=json`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const res = await response.json();
      return res.products;
    } else {
    } */
export const getProductRequest = () => {
  const result = {
    from: 1,
    to: 10,
    currentPage: 1,
    total: 1287,
    totalPages: 129,
    queryTime: "0.078",
    totalTime: "0.089",
    partial: false,
    canonicalUrl:
      "/v1/products((categoryPath.id=abcat0204000))?show=name,image,regularPrice&sort=name&format=json&apiKey=bNQPy8QdGNcs6BlTc8KbGJdg",

    products: [
      {
        name: "1MORE - EHD9001TA True Wireless Noise Cancelling In-Ear Headphones - Black",
        image:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6408/6408366_sa.jpg",
        regularPrice: 199.99,
        sku: 6408366,
      },
      {
        name: "1MORE - Piston Fit Wired In-Ear Headphones - Pink Gold",
        image:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6220/6220210_sa.jpg",
        regularPrice: 19.99,
        sku: 6220210,
      },
      {
        name: "1MORE - Piston Fit Wired In-Ear Headphones - Space Gray",
        image:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6220/6220212_sa.jpg",
        regularPrice: 19.99,
        sku: 6220212,
      },
      {
        name: "1MORE - Piston Fit Wired In-Ear Headphones - Teal",
        image:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6220/6220209_sa.jpg",
        regularPrice: 19.99,
        sku: 6220209,
      },
      {
        name: "1MORE - Triple Driver Wired In-Ear Headphones - Titanium",
        image:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6172/6172056_sa.jpg",
        regularPrice: 79.99,
        sku: 6172056,
      },
      {
        name: "512 Audio - Academy Studio Headphones - Black",
        image:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6476/6476545_sa.jpg",
        regularPrice: 99.99,
        sku: 6476545,
      },
      {
        name: "AfterShokz - Aeropex MINI Open-Ear Wireless Bone Conduction Headphones - Comic Black",
        image:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452517_sa.jpg",
        regularPrice: 159.99,
        sku: 6452517,
      },
      {
        name: "AfterShokz - Aeropex Wireless Bone Conduction Open-Ear Headphones - Cosmic Black",
        image:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6359/6359823_sa.jpg",
        regularPrice: 159.99,
        sku: 6359823,
      },
      {
        name: "AfterShokz - Aeropex Wireless Bone Conduction Open-Ear Headphones - Eclipse Blue",
        image:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6399/6399049_sa.jpg",
        regularPrice: 159.99,
        sku: 6399049,
      },
      {
        name: "AfterShokz - Aeropex Wireless Bone Conduction Open-Ear Headphones - Lunar Gray",
        image:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6399/6399111_sa.jpg",
        regularPrice: 159.99,
        sku: 6399111,
      },
    ],
  };
  return result.products;
};
