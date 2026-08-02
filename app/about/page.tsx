import type { Metadata } from "next";
import { HeartHandshake, Leaf, ShieldCheck, Truck } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { LinkButton } from "@/components/ui/link-button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dr. Rubina Official and our mission to support healthier routines in Pakistan with herbal wellness products, practical tools, and honest guidance.",
  alternates: { canonical: `${site.url}/about` },
};

const values = [
  {
    icon: Leaf,
    title: "Herbal-first approach",
    text: "We focus on practical wellness support instead of harsh, unrealistic shortcuts.",
  },
  {
    icon: ShieldCheck,
    title: "Honest guidance",
    text: "We avoid exaggerated claims and share realistic, balanced expectations.",
  },
  {
    icon: HeartHandshake,
    title: "Useful support",
    text: "From calculators to diet plans and blog content, we aim to make healthier choices easier.",
  },
  {
    icon: Truck,
    title: "Easy COD delivery",
    text: "Cash on Delivery across Pakistan helps customers order with more confidence.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={`Helping Pakistan build healthier routines with ${site.name}`}
        description="We combine herbal lifestyle support with practical tools so healthier choices feel more approachable in everyday life."
      />

      <section className="mx-auto max-w-3xl px-4">
        <div className="prose-custom space-y-5 text-muted-foreground">
          <p className="leading-relaxed">
            {site.name} was created with one simple goal: to make healthier
            routines more accessible to people across Pakistan. We saw too many
            customers spending money on expensive memberships, extreme diets,
            and products that promised instant change.
          </p>
          <p className="leading-relaxed">
            Our approach is different. We focus on herbal wellness support,
            practical education, and everyday tools like our calorie
            calculator, BMI calculator, blog articles, and desi-friendly diet
            plans.
          </p>
          <p className="leading-relaxed">
            We are clear about what our product can and cannot do. Sustainable
            progress depends on consistent meals, movement, hydration, sleep,
            and realistic expectations. Our role is to support that process in
            a way that feels simple, helpful, and honest.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-secondary p-8 text-center">
          <h2 className="text-pretty font-serif text-2xl font-semibold">
            Start your journey today
          </h2>
          <p className="mx-auto mt-2 max-w-lg leading-relaxed text-muted-foreground">
            Join customers across Pakistan who are building healthier routines
            with more practical support and clearer guidance.
          </p>
          <LinkButton href="/product" className="mt-6">
            Explore the Product
          </LinkButton>
        </div>
      </section>
    </>
  );
}
