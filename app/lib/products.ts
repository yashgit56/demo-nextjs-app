import type { Product } from "@/types/product";
import { notFound } from "next/navigation";

export async function getProducts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
      {
        next: { revalidate: 120 },
      },
    );

    if (!res.ok) {
      console.error("API failed:", res.status);
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}
