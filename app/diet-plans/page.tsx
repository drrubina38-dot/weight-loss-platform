import type { Metadata } from "next";
import { Lightbulb, UtensilsCrossed } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { LinkButton } from "@/components/ui/link-button";
import { dietPlans, weightLossTips } from "@/lib/diet";

export const metadata: Metadata = {
  title: "Healthy Pakistani Diet Plans for Weight Loss",
  description:
    "Free healthy Pakistani (desi) diet plans for weight loss with daily meal suggestions, plus practical weight loss tips you can start today.",
  alternates: { canonical: "/diet-plans" },
};

export default function DietPlansPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Diet Plans"
        title="Healthy Pakistani Diet Plans"
        description="Simple, affordable desi meal plans built around local foods — designed to help you lose weight without giving up flavour."
      />

      {/* Plans */}
      <section className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {dietPlans.map((plan) => (
            <div
              key={plan.slug}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                <UtensilsCrossed className="size-3.5" /> {plan.calories}
              </span>
              <h2 className="mt-4 font-serif text-xl font-semibold text-foreground">
                {plan.name}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-5 space-y-4">
                {plan.meals.map((meal) => (
                  <div
                    key={meal.time}
                    className="border-l-2 border-primary/30 pl-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {meal.time}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {meal.title}
                    </p>
                    <ul className="mt-1 space-y-0.5">
                      {meal.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-muted-foreground"
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="bg-secondary/40 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-2">
            <Lightbulb className="size-6 text-primary" />
            <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              Weight Loss Tips
            </h2>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {weightLossTips.map((tip, i) => (
              <li
                key={tip}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <span className="text-sm text-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 text-center">
        <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
          Boost your results naturally
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Combine these diet plans with SehatSlim herbal capsules to control
          cravings and support fat burning.
        </p>
        <div className="mt-6">
          <LinkButton href="/product#order" size="lg">
            Order Now — COD
          </LinkButton>
        </div>
      </section>
    </>
  );
}
