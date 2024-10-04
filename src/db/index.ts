import { Index } from "@upstash/vector";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();
export type Product = {
  id: string;
  imageId: string;
  name: string;
  size: "S" | "M" | "L";
  color: "white" | "beige" | "blue" | "green" | "purple";
  price: number;
};

export const db = new Index<Product>();
