import { Check } from 'lucide-react'
import { product } from '@/lib/product'

export function Benefits() {
  return (
    <section className="bg-secondary/40 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Benefits</p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Why thousands choose {product.shortName}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A gentle, natural approach to weight loss designed around real desi lifestyles.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {product.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-4" />
              </span>
              <span className="text-sm font-medium leading-relaxed text-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
