import { Product } from "@/types/product";
import { NextResponse } from "next/server";
import { productsResponse } from "@/app/lib/data";

export async function GET() {
  try {
    return NextResponse.json(productsResponse);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
