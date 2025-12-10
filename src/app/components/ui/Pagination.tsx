"use client";

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  return (
    <div className="flex items-center gap-2 mt-6 justify-center">

      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={`${baseUrl}?page=${prevPage}`}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Prev
        </Link>
      ) : (
        <button className="px-4 py-2 border rounded opacity-40 cursor-not-allowed">
          Prev
        </button>
      )}


      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={`${baseUrl}?page=${page}`}
            className={`px-3 py-1 rounded border ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </Link>
        ))}
      </div>

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={`${baseUrl}?page=${nextPage}`}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Next
        </Link>
      ) : (
        <button className="px-4 py-2 border rounded opacity-40 cursor-not-allowed">
          Next
        </button>
      )}
    </div>
  );
}
