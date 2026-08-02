import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Read the official Refund Policy of Dr Rubina Phaki. Learn about replacement, damaged parcels and return eligibility.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="font-serif text-4xl font-bold">Refund Policy</h1>
      <p className="mt-4 text-muted-foreground leading-8">
        At Dr Rubina Official, customer satisfaction is important to us. Please
        read our refund and replacement policy carefully before placing an
        order.
      </p>{" "}
      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold">1. Order Cancellation</h2>
          <p className="mt-3 leading-8 text-muted-foreground">
            Orders can be cancelled before dispatch. Once your parcel has been
            handed over to the courier service, cancellation may no longer be
            possible.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            2. Damaged or Wrong Product
          </h2>
          <p className="mt-3 leading-8 text-muted-foreground">
            If you receive a damaged parcel or an incorrect product, please
            contact our support team within 48 hours of delivery. We will verify
            the issue and arrange a replacement if applicable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. Opened Products</h2>
          <p className="mt-3 leading-8 text-muted-foreground">
            Due to health and hygiene reasons, opened or used products cannot be
            returned or refunded unless they were delivered damaged or the wrong
            item was sent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. Refund Eligibility</h2>
          <p className="mt-3 leading-8 text-muted-foreground">
            Refunds are only considered in exceptional cases where an order
            cannot be fulfilled or a verified issue cannot be resolved through a
            replacement. Approved refunds are processed using the original
            payment method where applicable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. Need Help?</h2>
          <p className="mt-3 leading-8 text-muted-foreground">
            If you have any questions regarding your order, please contact our
            customer support team through our Contact page or WhatsApp. We are
            committed to resolving genuine concerns as quickly as possible.
          </p>
        </section>
      </div>
      <div className="mt-12 rounded-2xl border border-green-200 bg-green-50 p-6">
        <h2 className="text-xl font-semibold text-green-800">
          Customer Satisfaction
        </h2>

        <p className="mt-3 leading-8 text-green-700">
          Our goal is to provide every customer with a smooth shopping
          experience. If you have any concerns regarding your order, please
          contact our support team before requesting a refund. We will do our
          best to resolve your issue promptly.
        </p>
      </div>
    </main>
  );
}
