import Image from "next/image";
import { Leaf, Flame, HeartPulse, Wallet } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { product } from "@/lib/product";
import { site } from "@/lib/site";

const highlights = [
  {
    icon: Leaf,
    title: "100% Herbal",
    text: "Plant-based ingredients with no harsh chemicals.",
  },
  {
    icon: Flame,
    title: "Burns Fat",
    text: "Supports metabolism and natural fat burning.",
  },
  {
    icon: HeartPulse,
    title: "Curbs Cravings",
    text: "Helps you eat less without feeling weak.",
  },
  {
    icon: Wallet,
    title: "Cash on Delivery",
    text: "Pay only when the parcel reaches you.",
  },
];

export function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <h.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-semibold text-foreground">
                  {h.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Our Product
          </p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            {product.name}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {product.tagline}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-3xl font-bold text-foreground">
              {site.currency} {product.price.toLocaleString()}
            </span>
            <span className="text-lg text-muted-foreground line-through">
              {site.currency} {product.oldPrice.toLocaleString()}
            </span>
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
              Save{" "}
              {Math.round(
                ((product.oldPrice - product.price) / product.oldPrice) * 100,
              )}
              %
            </span>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-secondary/40 p-4">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              width={900}
              height={600}
              className="h-[320px] w-full rounded-2xl object-cover"
            />
          </div>

          <div className="mt-6">
            <LinkButton href="/product#order" size="lg">
              Order Now — COD
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
