import { NextResponse } from "next/server";
import { Product } from "@/types/product";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ product: string }> },
) {
  const { product } = await params;
  const productId = Number(product);

  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);

  if (!res.ok) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  const receivedProduct: Product = await res.json();
  return NextResponse.json(receivedProduct);
}
