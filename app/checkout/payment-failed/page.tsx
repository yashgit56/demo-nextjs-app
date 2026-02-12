"use client";

import { useRouter } from "next/navigation";

export default function PaymentFailed() {
  const router = useRouter();

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-red-600">Payment Failed ❌</h1>
      <p className="mt-4">Something went wrong.</p>

      <button
        onClick={() => router.push("/checkout")}
        className="mt-6 bg-black text-white px-6 py-2 rounded"
      >
        Try Again
      </button>
    </div>
  );
}
