import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { productIds } = await req.json();

  const products = await Promise.all(
    productIds.map((id: number) =>
      fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
        res.json(),
      ),
    ),
  );

  return NextResponse.json(products);
}
