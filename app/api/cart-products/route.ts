import { productsResponse } from "@/app/lib/data";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { productIds } = await req.json();

  const products = productIds.map((id: number) => {
    productsResponse.find((product) => product.id === id);
  });

  return NextResponse.json(products);
}
