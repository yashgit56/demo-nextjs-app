import { Product } from "@/types/product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      return NextResponse.json(
        { message: "Failed to fetch products" },
        { status: 500 },
      );
    }

    const products: Product[] = await res.json();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
