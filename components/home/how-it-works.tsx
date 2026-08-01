import { ShoppingCart, Truck, HeartHandshake, Trophy } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    n: "01",
    title: "Place Your Order",
    text: "Complete the simple Cash on Delivery order form or contact us through WhatsApp. No advance payment required.",
  },
  {
    icon: Truck,
    n: "02",
    title: "Fast Home Delivery",
    text: "Your order is delivered safely across Pakistan within 2–4 working days with Cash on Delivery.",
  },
  {
    icon: HeartHandshake,
    n: "03",
    title: "Follow the Wellness Plan",
    text: "Use the product according to the provided instructions and follow our free diet guidance as part of a balanced lifestyle.",
  },
  {
    icon: Trophy,
    n: "04",
    title: "Build Healthy Habits",
    text: "Stay consistent with healthy eating, hydration, and physical activity to support your wellness journey.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/30 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            How It Works
          </span>

          <h2 className="mt-5 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Start Your Wellness Journey
            <span className="block text-primary">In 4 Simple Steps</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Ordering from Dr. Rubina Official is simple, secure and convenient.
            Follow these easy steps to begin your healthy lifestyle journey.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.n}
                className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute right-6 top-5 text-6xl font-bold text-primary/10">
                  {step.n}
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-8 w-8 text-primary group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-foreground">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
