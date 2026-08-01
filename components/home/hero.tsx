import Image from "next/image";
import { CheckCircle2, ShieldCheck, Truck } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { StarRating } from "@/components/star-rating";
import { product } from "@/lib/product";

const perks = [
  "100% Herbal Ingredients",
  "100,000+ Happy Customers",
  "Cash on Delivery Available",
  "Free Diet Plans & BMI Calculator",
];
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/60 to-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold text-green-700">
            <ShieldCheck className="size-4" />
            🇵🇰 Pakistan's Trusted Herbal Wellness Brand
          </span>
          <h1 className="mt-5 text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Natural Herbal Support
            <span className="block text-primary">
              For Healthy Weight Management
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
            Dr. Rubina Official provides a carefully selected herbal wellness
            formula to support healthy weight management as part of a balanced
            lifestyle. Get free Diet Plans, BMI & Calorie Calculators, and Cash
            on Delivery service all across Pakistan.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {perks.map((perk) => (
              <li
                key={perk}
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <CheckCircle2 className="size-5 text-primary" /> {perk}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton
              href="/product#order"
              size="lg"
              className="min-w-[220px] justify-center"
            >
              🛒 Order Now – Cash on Delivery
            </LinkButton>

            <LinkButton
              href="/product"
              variant="outline"
              size="lg"
              className="min-w-[220px] justify-center"
            >
              📦 View Product Details
            </LinkButton>
          </div>
          <div className="mt-8 rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <StarRating rating={product.rating} />
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {product.rating}/5 Rating
                </span>{" "}
                from {product.reviewCount.toLocaleString()}+ Happy Customers
              </p>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">100K+</p>
                <p className="text-xs text-muted-foreground">Customers</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-primary">4.9★</p>
                <p className="text-xs text-muted-foreground">Average Rating</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-xs text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div
            className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-primary/10 blur-2xl"
            aria-hidden="true"
          />
          <div className="overflow-hidden rounded-3xl border border-primary/10 bg-card shadow-2xl transition-all duration-300 hover:shadow-[0_20px_60px_rgba(22,163,74,0.20)]">
            <Image
              src="/hero-lifestyle.png"
              alt="Dr. Rubina Official Herbal Weight Loss Product"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground shadow-lg">
            <Truck className="size-4 text-primary" /> ⭐⭐⭐⭐⭐ 4.9/5 Rating •
            Cash on Delivery Available
          </div>
        </div>
      </div>
      <div className="border-t border-border/50 bg-white/70 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-4 text-sm font-medium text-muted-foreground">
          <span>🌿 100% Herbal Wellness</span>
          <span>🚚 Fast Delivery Across Pakistan</span>
          <span>💵 Cash on Delivery</span>
          <span>⭐ Trusted by 100,000+ Customers</span>
        </div>
      </div>
    </section>
  );
}
