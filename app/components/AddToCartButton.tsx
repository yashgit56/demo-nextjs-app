"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

type AddToCartButtonProps = {
  product: Product;
  isDisabled: boolean;
};

export default function AddToCartButton({
  product,
  isDisabled,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      disabled={isDisabled}
      className="w-full mt-4 bg-black text-white py-2 rounded-lg
                   hover:bg-gray-800 transition"
    >
      Add to Cart
    </button>
  );
}
