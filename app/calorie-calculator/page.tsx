import type { Metadata } from "next";
import { CalorieCalculator } from "@/components/calorie-calculator";
import { PageHeader } from "@/components/page-header";
import { LinkButton } from "@/components/ui/link-button";

export const metadata: Metadata = {
  title: "Free Calorie Calculator | Daily Calorie Needs",
  description:
    "Calculate your daily calorie needs based on age, gender, height, weight, and activity level with this free calorie calculator for Pakistan.",
  alternates: { canonical: "/calorie-calculator" },
};

export default function CalorieCalculatorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Tool"
        title="Calorie Calculator"
        description="Estimate how many calories you may need each day to maintain your weight or support a healthier routine."
      />
      <section className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
        <CalorieCalculator />

        <div className="mt-12 rounded-2xl border border-border bg-secondary/40 p-6 text-center sm:p-8">
          <h2 className="font-serif text-xl font-semibold text-foreground">
            Ready to turn your target into a routine?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Pair your calorie target with our free Pakistani diet plans and
            practical lifestyle support for a more consistent routine.
          </p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <LinkButton href="/diet-plans">View Diet Plans</LinkButton>
            <LinkButton href="/product#order" variant="outline">
              Explore the Product
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
