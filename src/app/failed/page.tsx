"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaTimesCircle } from "react-icons/fa";

export default function FailedPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/shop");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center animate-fade-in">

        <FaTimesCircle className="text-red-500 text-6xl mb-4 animate-pulse" />

        <h1 className="text-2xl font-bold text-red-600">
          Payment Failed
        </h1>

        <p className="text-gray-500 mt-2 text-center max-w-sm">
          Something went wrong or the payment was cancelled.
        </p>

        <button
          onClick={() => router.push("/shop")}
          className="mt-6 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}