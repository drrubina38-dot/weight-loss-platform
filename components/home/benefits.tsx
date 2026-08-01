import { Check, ShieldCheck, Leaf, HeartHandshake, Truck } from "lucide-react";
import { product } from "@/lib/product";

const trustPoints = [
  {
    icon: Leaf,
    title: "100% Herbal Ingredients",
    text: "Made with carefully selected herbal ingredients to support a healthy lifestyle.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Quality",
    text: "Prepared with a strong focus on quality, purity, and customer satisfaction.",
  },
  {
    icon: HeartHandshake,
    title: "Healthy Lifestyle Support",
    text: "Designed to complement balanced nutrition and regular physical activity.",
  },
  {
    icon: Truck,
    title: "Cash on Delivery",
    text: "Fast nationwide delivery across Pakistan with Cash on Delivery service.",
  },
];

export function Benefits() {
  return (
    <section className="bg-gradient-to-b from-secondary/40 to-background py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Why Choose Dr. Rubina Official
          </span>

          <h2 className="mt-5 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Natural Wellness for a Healthier Lifestyle
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Discover why thousands of customers across Pakistan trust
            <span className="font-semibold text-foreground">
              {" "}
              {product.shortName}
            </span>
            . Our herbal wellness formula is designed to support healthy weight
            management as part of a balanced lifestyle.
          </p>
        </div>

        {/* Trust Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-primary/10 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Product Benefits */}

        <div className="mt-16 rounded-3xl border border-border bg-card p-8 shadow-lg">
          <h3 className="text-center text-3xl font-bold text-foreground">
            Key Benefits
          </h3>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {product.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Check className="h-5 w-5" />
                </span>

                <p className="leading-7 text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
