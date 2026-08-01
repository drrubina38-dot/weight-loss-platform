import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { BmiCalculator } from "@/components/bmi-calculator";
import { LinkButton } from "@/components/ui/link-button";

export const metadata: Metadata = {
  title: "Free BMI Calculator — Check Your Body Mass Index",
  description:
    "Calculate your BMI (Body Mass Index) instantly and see your weight category with a simple explanation. Free BMI calculator for Pakistan.",
  alternates: { canonical: "/bmi-calculator" },
};

export default function BmiCalculatorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Tool"
        title="BMI Calculator"
        description="Check your Body Mass Index instantly and understand what your result means for your health."
      />
      <section className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
        <BmiCalculator />

        <div className="mt-12 rounded-2xl border border-border bg-secondary/40 p-6 text-center sm:p-8">
          <h2 className="font-serif text-xl font-semibold text-foreground">
            Want to reach a healthy BMI?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Explore our free weight loss diet plans and natural herbal support
            to reach your goal safely.
          </p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <LinkButton href="/diet-plans">View Diet Plans</LinkButton>
            <LinkButton href="/product#order" variant="outline">
              Order Now
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
