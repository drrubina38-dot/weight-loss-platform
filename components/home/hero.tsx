import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { StarRating } from "@/components/star-rating";
import { product } from "@/lib/product";

const perks = [
  "Supports healthy weight management",
  "Cash on Delivery available across Pakistan",
  "Includes free BMI and calorie tools",
  "Designed to complement healthy daily habits",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(79,154,101,0.22),_transparent_55%)]"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-700 shadow-sm">
            <ShieldCheck className="size-4" />
            Trusted Herbal Wellness Support
          </span>
          <h1 className="mt-5 text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            A calmer, cleaner path to
            <span className="block text-primary">
              healthy weight management
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
            Dr. Rubina Official pairs herbal wellness support with practical
            tools, diet guidance, and everyday motivation for people building a
            healthier lifestyle in Pakistan.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {perks.map((perk) => (
              <li
                key={perk}
                className="flex items-start gap-2 rounded-2xl border border-border/70 bg-white/80 px-4 py-3 text-sm font-medium text-foreground shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton
              href="/product#order"
              size="lg"
              className="min-w-[220px] justify-center"
            >
              Order Now with COD
            </LinkButton>
            <LinkButton
              href="/product"
              variant="outline"
              size="lg"
              className="min-w-[220px] justify-center"
            >
              Explore Product Details
            </LinkButton>
          </div>
          <div className="mt-8 grid gap-4 rounded-[1.75rem] border border-border/80 bg-white/80 p-5 shadow-lg sm:grid-cols-1 sm:items-center">
            <div className="flex items-center gap-4">
              <StarRating rating={product.rating} />
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {product.rating}/5 rating
                </span>{" "}
                from {product.reviewCount.toLocaleString()}+ customer reviews
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 border-border/70 sm:border-l sm:pl-5">
              <div>
                <p className="text-2xl font-bold text-primary">100K+</p>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Customers
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Support
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">2-4</p>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Working Days
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div
            className="absolute -inset-5 -z-10 rounded-[2.75rem] bg-primary/10 blur-2xl"
            aria-hidden="true"
          />
          <div className="overflow-hidden rounded-[2rem] border border-primary/10 bg-card shadow-[0_24px_80px_rgba(31,122,69,0.18)]">
            <Image
              src="/hero-lifestyle.png"
              alt="Healthy lifestyle visual for Dr. Rubina Official"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-white/60 bg-white/92 p-4 shadow-xl backdrop-blur">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Sparkles className="size-4 text-primary" />
              Lifestyle support that fits real routines
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3 text-xs font-medium text-muted-foreground sm:text-sm">
              <span className="flex items-center gap-2 rounded-full bg-secondary/70 px-3 py-2">
                <Truck className="size-4 text-primary" />
                Nationwide delivery
              </span>
              <span className="rounded-full bg-secondary/70 px-3 py-2 text-center">
                Results vary by routine
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
