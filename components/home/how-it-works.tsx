import { HeartHandshake, ShoppingCart, Truck, Trophy } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    n: "01",
    title: "Place your order",
    text: "Use the order form or WhatsApp to request your parcel with Cash on Delivery.",
  },
  {
    icon: Truck,
    n: "02",
    title: "Receive delivery",
    text: "Your order is dispatched across Pakistan and typically arrives within 2-4 working days.",
  },
  {
    icon: HeartHandshake,
    n: "03",
    title: "Follow the routine",
    text: "Use the product according to the provided instructions alongside balanced meals and hydration.",
  },
  {
    icon: Trophy,
    n: "04",
    title: "Build better habits",
    text: "Stay consistent with movement, sleep, and everyday food choices to support long-term progress.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/30 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            How It Works
          </span>
          <h2 className="mt-5 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Start your wellness routine
            <span className="block text-primary">in four practical steps</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            The process is simple, supportive, and designed around everyday
            routines in Pakistan.
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
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary">
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
