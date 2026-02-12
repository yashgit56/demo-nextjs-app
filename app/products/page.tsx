import ProductList from "@/app/components/ProductList";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to load products");
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
