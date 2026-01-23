import { db } from "@/db";
import { products } from "@/db/schema"

export async function getFeaturedProducts() {
  const productsData = await db.select().from(products);

  return productsData;
}
