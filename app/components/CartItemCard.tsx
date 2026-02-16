import { useCart } from "@/context/CartContext";
import { CartItem } from "@/types/cart";

interface CartItemCardProps {
  item: CartItem;
  showQtyControls?: boolean;
}

export default function CartItemCard({
  item,
  showQtyControls = true,
}: CartItemCardProps) {
  const { incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  return (
    <div
      key={item.id}
      className="flex flex-col sm:flex-row justify-between items-center border p-4 rounded"
    >
      {/* Product Info */}
      <div>
        <h3 className="font-medium">{item.title}</h3>
        <p className="text-sm text-gray-500">
          ₹{item.price} × {item.quantity}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-4">
        {showQtyControls && (
          <div className="flex items-center border rounded">
            <button
              onClick={() => decrementQuantity(item.id)}
              className="px-3 py-1 text-lg"
            >
              −
            </button>

            <span className="px-3">{item.quantity}</span>

            <button
              onClick={() => incrementQuantity(item.id)}
              className="px-3 py-1 text-lg"
            >
              +
            </button>
          </div>
        )}

        <div className="flex flex-col items-center justify-evenly">
          {/* Item Total */}
          <span className="font-semibold">
            ₹{(item.price * item.quantity).toFixed(2)}
          </span>

          {/* Remove */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
