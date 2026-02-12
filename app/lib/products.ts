import type { Product } from "@/types/product";
import { notFound } from "next/navigation";

export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) throw new Error("Failed to load products");

  return res.json();
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