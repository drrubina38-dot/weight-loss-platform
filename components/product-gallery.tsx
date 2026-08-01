"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { product } from "@/lib/product";

export function ProductGallery() {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Main Image */}

      <div className="overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-white to-green-50 shadow-xl">
        <Image
          src={product.images[active] || "/placeholder.svg"}
          alt={`${product.name} image ${active + 1}`}
          width={700}
          height={700}
          priority
          className="mx-auto h-[420px] w-auto object-contain p-8 transition-transform duration-500 hover:scale-110 sm:h-[520px]"
        />
      </div>

      {/* Thumbnails */}

      {product.images.length > 1 && (
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {product.images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={cn(
                "overflow-hidden rounded-2xl border-2 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                active === i
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-gray-200",
              )}
            >
              <Image
                src={img || "/placeholder.svg"}
                alt={`${product.name} thumbnail ${i + 1}`}
                width={110}
                height={110}
                className="h-24 w-24 object-contain p-2"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
