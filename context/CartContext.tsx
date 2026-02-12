"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/product";
import { CartItem, CartContextType } from "@/types/cart";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

const CART_KEY = "cart_items";
const TOTAL_SALE_KEY = "total_sale";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = sessionStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
  });
  const [totalSale, setTotalSale] = useState<string>(() => {
    if (typeof window === "undefined") return "0";
    const total_sale = sessionStorage.getItem(TOTAL_SALE_KEY);
    return total_sale ? total_sale : "0";
  });

  // 🔹 Save cart whenever it changes
  useEffect(() => {
    sessionStorage.setItem(CART_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    sessionStorage.setItem(TOTAL_SALE_KEY, totalSale.toString());
  }, [totalSale]);

  const addToCart = (product: Product, showToast: boolean = true) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
    {
      showToast && toast.success("Item Added to cart successfully");
    }
  };

  const incrementQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    );
  };

  const decrementQuantity = (id: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (id: number, showToast: boolean = true) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    {
      showToast && toast.success("Item removed from cart successfully");
    }
  };

  const clearCart = (showToast: boolean = true) => {
    setCartItems([]);
    {
      showToast && toast.success("Cart Cleared");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        incrementQuantity,
        decrementQuantity,
        totalSale,
        setTotalSale,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* =======================
   Custom Hook
   ======================= */
export function useCart(): CartContextType {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
