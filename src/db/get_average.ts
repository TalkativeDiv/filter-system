import { type Product, db } from ".";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const getAveragePrice = async () => {
  const avgProduct = await db.query({
    topK: 45,
    vector: [0, 0, 0],
    includeMetadata: true,
  });

  console.log(
    Math.floor(
      avgProduct
        .map(({ metadata }) => metadata?.price ?? 0)
        .reduce((a, b) => a + b, 0) / avgProduct.length
    )
  );
};

getAveragePrice();
