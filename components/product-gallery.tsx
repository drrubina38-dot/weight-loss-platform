'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { product } from '@/lib/product'

export function ProductGallery() {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className="overflow-hidden rounded-3xl border border-border bg-secondary/40">
        <Image
          src={product.images[active] || '/placeholder.svg'}
          alt={`${product.name} view ${active + 1}`}
          width={640}
          height={640}
          priority
          className="mx-auto h-80 w-auto object-contain py-6 sm:h-96"
        />
      </div>
      {product.images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {product.images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={cn(
                'overflow-hidden rounded-xl border-2 bg-secondary/40 transition-colors',
                active === i ? 'border-primary' : 'border-transparent',
              )}
            >
              <Image
                src={img || '/placeholder.svg'}
                alt={`${product.name} thumbnail ${i + 1}`}
                width={100}
                height={100}
                className="size-20 object-contain p-1.5"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
