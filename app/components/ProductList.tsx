"use client";
import type { Product } from "@/types/product";
import { useState, useMemo, useEffect } from "react";
import ProductCard from "./ProductCard";
import { categoryOptions, sortOptions } from "../lib/data";
import Dropdown from "./Dropdown";

export default function ProductList({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [displayProducts, setDisplayProducts] = useState(products);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // 🔹 Category filter
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory,
      );
    }

    // 🔹 Sorting
    switch (sortOption) {
      case "category-asc":
        result.sort((a, b) => a.category.localeCompare(b.category));
        break;

      case "category-desc":
        result.sort((a, b) => b.category.localeCompare(a.category));
        break;

      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }
    return result;
  }, [products, selectedCategory, sortOption]);

  useEffect(() => {
    setDisplayProducts(filteredAndSortedProducts);
  }, [filteredAndSortedProducts]);

  return (
    <>
      <div className="flex flex-wrap justify-end gap-4 m-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Dropdown
            value={selectedCategory}
            onChange={setSelectedCategory}
            options={categoryOptions}
          />
          <Dropdown
            value={sortOption}
            onChange={setSortOption}
            options={sortOptions}
          />
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-2">
        {displayProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
}
