"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/shop"); // change if needed
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center animate-fade-in">
        
        <FaCheckCircle className="text-green-500 text-6xl mb-4 animate-bounce" />

        <h1 className="text-2xl font-bold text-green-600">
          Payment Successful!
        </h1>

        <p className="text-gray-500 mt-2">
          Redirecting to shop...
        </p>

        <button
          onClick={() => router.push("/shop")}
          className="mt-6 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
        >
          Back to Shop
        </button>
      </div>
    </div>
  );
}