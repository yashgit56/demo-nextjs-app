"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { CartItem } from "@/types/cart";
import toast from "react-hot-toast";
import CartItemCard from "../components/CartItemCard";

export default function CheckoutPage() {
  const { cartItems, clearCart, removeFromCart, totalSale, setTotalSale } =
    useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handlePayment = () => {
    setLoading(true);

    // ⏳ simulate payment processing
    setTimeout(() => {
      const isSuccess = Math.random() > 0.3; // 70% success

      setLoading(false);

      if (isSuccess) {
        setTotalSale(totalSale + totalAmount);
        clearCart(false);
        toast.success("Order Placed Successfully");
        router.push("/checkout/payment-success");
      } else {
        router.push("/checkout/payment-failed");
      }
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h2 className="text-xl font-bold mb-4">Checkout (Purchased Products) </h2>

      <div className="space-y-4">
        {cartItems.length === 0 ? (
          <div>Not Purchased Yet... </div>
        ) : (
          cartItems.map((item: CartItem) => (
            <CartItemCard key={item.id} item={item} showQtyControls={false} />
          ))
        )}
      </div>

      <div className="flex items-center justify-center mt-2 gap-5">
        <p className="mb-6">Total Amount</p>
        <p className="text-2xl font-bold mb-6">₹{totalAmount.toFixed(2)}</p>
      </div>

      <button
        onClick={handlePayment}
        disabled={totalAmount === 0 || loading}
        className="w-full bg-black text-white py-2 rounded"
      >
        {loading ? "Processing Payment..." : "Pay Now"}
      </button>
    </div>
  );
}
