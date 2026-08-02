import Image from "next/image";
import { ArrowRight, HeartPulse, Leaf, ShieldCheck, Wallet } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { product } from "@/lib/product";
import { site } from "@/lib/site";

const highlights = [
  {
    icon: Leaf,
    title: "Herbal routine support",
    text: "Built around carefully selected ingredients and balanced lifestyle habits.",
  },
  {
    icon: HeartPulse,
    title: "Made for consistency",
    text: "Simple daily use that fits home, work, and family routines.",
  },
  {
    icon: ShieldCheck,
    title: "Compliant wellness messaging",
    text: "Focused on support, guidance, and realistic expectations.",
  },
  {
    icon: Wallet,
    title: "Cash on Delivery",
    text: "Order confidently and pay when your parcel reaches you.",
  },
];

export function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="order-2 lg:order-1">
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-[1.75rem] border border-primary/10 bg-white/85 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <highlight.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {highlight.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Featured Product
          </p>
          <h2 className="mt-2 text-balance font-serif text-4xl font-bold text-foreground sm:text-5xl">
            {product.name}
          </h2>
          <p className="mt-5 max-w-xl text-pretty leading-8 text-muted-foreground">
            {product.tagline} Explore the ingredients, usage guidance, and
            helpful tools that support a more intentional routine.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="text-3xl font-bold text-foreground">
              {site.currency} {product.price.toLocaleString()}
            </span>
            <span className="text-lg text-muted-foreground line-through">
              {site.currency} {product.oldPrice.toLocaleString()}
            </span>
            <span className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-green-700">
              Save{" "}
              {Math.round(
                ((product.oldPrice - product.price) / product.oldPrice) * 100,
              )}
              %
            </span>
          </div>

          <div className="mt-6 overflow-hidden rounded-[2rem] border border-primary/10 bg-gradient-to-br from-white to-secondary/80 shadow-xl">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={`${product.name} product jar`}
              width={600}
              height={480}
              className="mx-auto h-80 w-auto object-contain p-6"
            />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton
              href="/product#order"
              size="lg"
              className="min-w-[220px] justify-center"
            >
              Order Now
            </LinkButton>
            <LinkButton
              href="/product"
              variant="outline"
              size="lg"
              className="min-w-[220px] justify-center"
            >
              Product Details
            </LinkButton>
          </div>

          <a
            href="/blog"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
          >
            Read healthy lifestyle articles
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
