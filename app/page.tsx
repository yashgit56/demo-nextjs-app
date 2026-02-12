import Image from "next/image";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    next: { revalidate: 120 },
  });

  if (!res.ok) {
    throw new Error("Failed to load products");
  }

  return res.json();
}

export default async function DashboardPage() {
  const products = await getProducts();
  return (
    <div className="space-y-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center">Analytics</h1>

      {/* Stats Section */}
      <div className="flex justify-center">
        <StatCard title="Products" value={products.length} />
      </div>
    </div>
  );
}

/* ---------- Stats Card ---------- */

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="w-56 rounded-lg bg-white p-6 shadow text-center">
      <p className="text-gray-500">{title}</p>
      <h2 className="mt-2 text-2xl font-bold">{value}</h2>
    </div>
  );
}
