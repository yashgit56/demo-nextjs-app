import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import type { Product } from "@/types/product";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <li
      key={product.id}
      className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="flex items-center justify-center bg-gray-50 rounded-lg p-3 h-40 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={120}
          height={120}
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-sm font-semibold line-clamp-2 hover:text-blue-600">
        <Link href={`/products/${product.id}`}>{product.title}</Link>
      </h3>

      {/* Price */}
      <p className="mt-2 text-lg font-bold text-gray-900">₹{product.price}</p>

      {/* Category */}
      <p className="text-xs text-gray-500 uppercase tracking-wide">
        {product.category}
      </p>

      {/* Rating */}
      <p className="mt-1 text-sm text-yellow-600">
        ⭐ {product.rating.rate}
        <span className="text-gray-400"> ({product.rating.count})</span>
      </p>

      {/* CTA */}
      <div className="mt-4">
        <AddToCartButton product={product} isDisabled={false} />
      </div>
    </li>
  );
}
