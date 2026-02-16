import { NextResponse } from "next/server";
import { Product } from "@/types/product";
import { productsResponse } from "@/app/lib/data";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ product: string }> },
) {
  const { product } = await params;
  const productId = Number(product);

  console.log("single product response api is called");
  const receivedProduct = productsResponse.find(
    (product) => product.id === productId,
  );
  return NextResponse.json(receivedProduct);
}
