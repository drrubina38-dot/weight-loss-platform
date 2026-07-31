import Image from "next/image";
import { CheckCircle2, ShieldCheck, Truck } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { StarRating } from "@/components/star-rating";
import { product } from "@/lib/product";

const perks = [
  "100% Herbal Formula",
  "Cash on Delivery",
  "Pakistan Wide Delivery",
  "Diet Plans Included",
];
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/60 to-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-4 py-1.5 text-xs font-semibold text-primary">
            <ShieldCheck className="size-4" /> Dr. Rubina Official • Trusted by
            Thousands Across Pakistan
          </span>
          <h1 className="mt-5 text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Start Your Healthy Weight Management Journey with Dr. Rubina
            Official
          </h1>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Discover a natural herbal wellness formula designed to support
            healthy weight management when combined with a balanced diet and
            active lifestyle. Get expert diet guidance, BMI & Calorie
            Calculators, and Cash on Delivery across Pakistan.
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
            <LinkButton href="/product#order" size="lg">
              Order Now
            </LinkButton>
            <LinkButton href="/product" variant="outline" size="lg">
              View Product
            </LinkButton>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <StarRating rating={product.rating} />
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {product.rating}/5
              </span>{" "}
              from {product.reviewCount.toLocaleString()}+ happy customers
            </p>
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div
            className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-primary/10 blur-2xl"
            aria-hidden="true"
          />
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
            <Image
              src="/hero-lifestyle.png"
              alt="Dr. Rubina Official Herbal Weight Loss Product"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground shadow-lg">
            <Truck className="size-4 text-primary" /> Free delivery on 2+
            bottles
          </div>
        </div>
      </div>
    </section>
  );
}
