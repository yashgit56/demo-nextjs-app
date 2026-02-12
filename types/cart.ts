import { Product } from "./product";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, showToast?: boolean) => void;
  removeFromCart: (productId: number, showToast?: boolean) => void;
  clearCart: (showToast?: boolean) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
  totalSale: string;
  setTotalSale: (amount: string) => void;
}
