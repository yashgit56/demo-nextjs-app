"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CartItem } from "@/types/cart";
import { useCart } from "@/context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartDropdownItemCard from "./CartDropdownItemCard";

<FontAwesomeIcon icon={faShoppingCart} className="text-xl" />;

export default function CartDropdown({
  items,
  isMobile = false,
}: {
  items: CartItem[];
  isMobile?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { incrementQuantity, decrementQuantity, removeFromCart, clearCart } =
    useCart();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="relative" ref={ref}>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-white hover:bg-gray-50"
      >
        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
        <span className="font-medium">Cart</span>
        {items.length > 0 && (
          <span className="ml-1 rounded-full bg-black text-white text-xs px-2 py-0.5">
            {items.length}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute ${isMobile ? "left-0" : "right-0"} mt-3 w-80 rounded-xl border bg-white shadow-lg z-50`}
        >
          {isMobile ? (
            <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t rotate-45"></div>
          ) : (
            <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t rotate-45"></div>
          )}
          {items.length === 0 ? (
            <p className="p-4 text-gray-500 text-sm">
              Your cart is empty
            </p>
          ) : (
            <>
              <h4 className="text-center font-semibold p-2"> My Cart </h4>
              <hr />
              <ul className="max-h-64 overflow-auto divide-y">
                {items.map((item) => (
                  <CartDropdownItemCard key={item.id} item={item} />
                ))}
              </ul>

              <div className="p-4 border-t space-y-1">
                <div className="flex justify-between font-semibold mb-3">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>

                <Link
                  href="/cart"
                  className="block text-center bg-black text-white py-2 rounded-lg hover:bg-gray-800"
                >
                  View Cart
                </Link>

                <Link
                  href="/checkout"
                  className="block text-center bg-blue text-black py-2 rounded-lg hover:bg-blue-200"
                >
                  Continue to Billing
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
