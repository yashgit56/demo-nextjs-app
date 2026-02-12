"use client";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/types/cart";
import { useRouter } from "next/navigation";
import CartItemCard from "../components/CartItemCard";

export default function Cart() {
  const {
    cartItems,
    clearCart,
  } = useCart();
  const router = useRouter();

  if (cartItems.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <p className="mt-4 text-gray-500">Your cart is empty 🛒</p>
      </div>
    );
  }

  const totalPrice = cartItems.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <div className="space-y-4">
        {cartItems.map((item: CartItem) => (
          <CartItemCard key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-8 border-t pt-4 flex justify-between items-center">
        <span className="text-lg font-semibold">Total</span>
        <span className="text-lg font-bold">₹{totalPrice.toFixed(2)}</span>
      </div>

      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => router.push("/checkout")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Continue to Billing
        </button>
        <button
          onClick={() => clearCart}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
