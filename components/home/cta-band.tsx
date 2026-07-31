import { LinkButton } from '@/components/ui/link-button'
import { site } from '@/lib/site'
import { product } from '@/lib/product'

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
        <h2 className="mx-auto max-w-2xl text-balance font-serif text-3xl font-semibold sm:text-4xl">
          Ready to start your weight loss journey?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
          Order {product.name} today with Cash on Delivery. Pay only when it arrives — risk free.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <LinkButton href="/product#order" variant="white" size="lg">
            Order Now — COD
          </LinkButton>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-13 items-center justify-center rounded-full border border-primary-foreground/30 px-8 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
