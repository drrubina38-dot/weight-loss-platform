import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description:
    "Read the official Shipping Policy of Dr Rubina Official. Learn about delivery times, Cash on Delivery, shipping coverage and order processing.",
  alternates: {
    canonical: "/shipping-policy",
  },
};

export default function ShippingPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="font-serif text-4xl font-bold">Shipping Policy</h1>

      <p className="mt-4 leading-8 text-muted-foreground">
        We are committed to delivering your order safely and as quickly as
        possible. Please read our shipping policy before placing an order.
      </p>
      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold">1. Delivery Coverage</h2>

          <p className="mt-3 leading-8 text-muted-foreground">
            We deliver across Pakistan. Delivery availability depends on the
            courier service in your area.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. Order Processing</h2>

          <p className="mt-3 leading-8 text-muted-foreground">
            Orders are usually processed within 24 hours after confirmation. Our
            support team may contact you to verify your order before dispatch.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. Delivery Time</h2>

          <p className="mt-3 leading-8 text-muted-foreground">
            Most orders are delivered within 2–5 working days depending on your
            city and courier availability. Delivery to remote areas may take
            slightly longer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. Cash on Delivery</h2>

          <p className="mt-3 leading-8 text-muted-foreground">
            We offer Cash on Delivery (COD) across Pakistan. Customers pay only
            after receiving their parcel.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. Shipping Charges</h2>

          <p className="mt-3 leading-8 text-muted-foreground">
            We currently offer <strong>FREE Delivery</strong> across Pakistan.
            No additional shipping charges are applied during checkout unless
            stated otherwise during a promotional campaign.
          </p>
        </section>
      </div>
      <div className="mt-12 rounded-2xl border border-green-200 bg-green-50 p-6">
        <h2 className="text-xl font-semibold text-green-800">
          Need Assistance?
        </h2>

        <p className="mt-3 leading-8 text-green-700">
          If you have any questions regarding shipping, order confirmation, or
          delivery, please contact our customer support team. We are always
          happy to help and ensure a smooth shopping experience.
        </p>
      </div>
    </main>
  );
}
