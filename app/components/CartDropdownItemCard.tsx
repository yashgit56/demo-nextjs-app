import { useCart } from "@/context/CartContext";
import { CartItem } from "@/types/cart";
import React from "react";

interface CartDropdownItemCardProps {
  item: CartItem;
}

function CartDropdownItemCard({ item }: CartDropdownItemCardProps) {
  const { decrementQuantity, incrementQuantity, removeFromCart } = useCart();

  return (
    <li key={item.id} className="p-4 flex justify-between">
      <div className="flex flex-col justify-center gap-2 max-w-37.5">
        <p className="font-medium truncate">{item.title}</p>
        <div className="flex items-center justify-center border rounded max-w-25">
          <button
            onClick={() => decrementQuantity(item.id)}
            className="px-3 py-1 text-sm"
          >
            −
          </button>

          <span className="px-3">{item.quantity}</span>

          <button
            onClick={() => incrementQuantity(item.id)}
            className="px-3 py-1 text-sm"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly">
        <p className="font-semibold">
          ₹{(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 text-sm"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartDropdownItemCard;
