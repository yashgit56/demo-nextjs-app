import Link from "next/link";
import { notFound } from "next/navigation";
import { Product } from "@/types/product";
import Image from "next/image";
import AddToCartButton from "@/app/components/AddToCartButton";
import { getProduct } from "@/app/lib/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  // simulate delay (to show loading.tsx)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const { product } = await params;
  const prod = await getProduct(product);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/products"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-6"
        >
          ← Back to Products
        </Link>

        {/* Product Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          {/* Image Section */}
          <div className="flex items-center justify-center bg-gray-100 rounded-xl p-6">
            <Image
              src={prod.image}
              alt={prod.title}
              width={300}
              height={300}
              className="object-contain hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900">{prod.title}</h1>

          {/* Category */}
          <span className="inline-block text-xs font-semibold uppercase tracking-wide text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            {prod.category}
          </span>

          {/* Price */}
          <div className="text-2xl font-semibold text-green-600">
            ₹{prod.price}
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">{prod.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              ⭐ {prod.rating.rate}
            </span>
            <span className="text-sm text-gray-500">
              ({prod.rating.count} reviews)
            </span>
          </div>

          <div className="mt-4">
            <AddToCartButton product={prod} isDisabled={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
