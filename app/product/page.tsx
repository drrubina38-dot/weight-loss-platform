import type { Metadata } from "next";
import { AlertTriangle, Check, Clock, FlaskConical, Leaf } from "lucide-react";
import { ProductGallery } from "@/components/product-gallery";
import { OrderForm } from "@/components/order-form";
import { StarRating } from "@/components/star-rating";
import { LinkButton } from "@/components/ui/link-button";
import { JsonLd } from "@/components/json-ld";
import { product } from "@/lib/product";
import { site } from "@/lib/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Cash on Delivery available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cash on Delivery is available across Pakistan.",
      },
    },
    {
      "@type": "Question",
      name: "How long does delivery take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Orders are usually delivered within 2–4 working days.",
      },
    },
    {
      "@type": "Question",
      name: "How can I place an order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can place your order through the online order form or WhatsApp.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: site.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Product",
      item: `${site.url}/product`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Dr Rubina Phaki",
      item: `${site.url}/product`,
    },
  ],
};
<JsonLd data={breadcrumbSchema} />;
<JsonLd data={faqSchema} />;
export const metadata: Metadata = {
  title: `Dr Rubina Phaki | Original Weight Loss Phaki in Pakistan | Cash on Delivery`,
  description:
    "Buy Original Dr Rubina Phaki online in Pakistan with Cash on Delivery. Official website, nationwide delivery, secure ordering and customer support.",
  openGraph: {
    title: "Dr Rubina Phaki | Original Weight Loss Phaki",
    description:
      "Buy Original Dr Rubina Phaki online in Pakistan with Cash on Delivery.",
    url: `${site.url}/product`,
    type: "website",
    images: [{ url: product.images[0] }],
  },
};

export default function ProductPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",

          name: product.name,

          image: product.images.map((i) => `${site.url}${i}`),

          description: product.tagline,

          sku: "DRP-001",

          category: "Weight Loss Phaki",

          brand: {
            "@type": "Brand",
            name: site.name,
          },

          manufacturer: {
            "@type": "Organization",
            name: site.name,
          },

          offers: {
            "@type": "Offer",
            url: `${site.url}/product`,
            priceCurrency: "PKR",
            price: product.price,
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            seller: {
              "@type": "Organization",
              name: site.name,
            },
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.rating,
            reviewCount: product.reviewCount,
            bestRating: "5",
            worstRating: "1",
          },
        }}
      />

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-4 py-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <ProductGallery />

          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
              <Leaf className="size-3.5" /> Dr. Rubina Official
            </span>
            <h1 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} />
              <span className="text-sm text-muted-foreground">
                {product.rating}/5 Customer Rating
              </span>
            </div>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {product.tagline}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-3xl font-bold text-foreground">
                {site.currency} {product.price.toLocaleString()}
              </span>
              <span className="text-lg text-muted-foreground line-through">
                {site.currency} {product.oldPrice.toLocaleString()}
              </span>
              <p className="mt-2 text-sm font-medium text-green-600">
                ✅ Cash on Delivery Available All Over Pakistan
              </p>

              <p className="text-sm font-medium text-green-600">
                🚚 Fast Delivery
              </p>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {product.servings}
            </p>

            <ul className="mt-6 space-y-2.5">
              {product.benefits.slice(0, 4).map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-sm text-foreground"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {b}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <LinkButton href="#order" size="lg">
                Order Now
              </LinkButton>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border p-3 text-center">
                🚚 Pakistan Wide Delivery
              </div>

              <div className="rounded-xl border p-3 text-center">
                💵 Cash on Delivery
              </div>

              <div className="rounded-xl border p-3 text-center">
                🌿 Herbal Formula
              </div>

              <div className="rounded-xl border p-3 text-center">
                📞 Customer Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center gap-2">
            <FlaskConical className="size-6 text-primary" />
            <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              Natural Ingredients
            </h2>
          </div>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Carefully selected herbal ingredients designed to support a healthy
            lifestyle.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.ingredients.map((ing) => (
              <div
                key={ing.name}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <h3 className="font-semibold text-foreground">{ing.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {ing.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Usage */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              Key Benefits
            </h2>
            <ul className="mt-6 space-y-3">
              {product.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <Clock className="size-6 text-primary" />
              <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                How to Use
              </h2>
            </div>
            <ol className="mt-6 space-y-3">
              {product.usage.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-amber-300/60 bg-amber-50 p-5">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600" />
          <div>
            <h3 className="text-sm font-semibold text-amber-800">Disclaimer</h3>
            <p className="mt-1 text-sm leading-relaxed text-amber-800/90">
              {product.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* Order */}
      <section id="order" className="scroll-mt-20 bg-secondary/40 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Place Your Cash on Delivery Order
            </h2>
            <p className="mt-3 text-muted-foreground">
              Complete the form below. Our support team will contact you to
              confirm your order before dispatch.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-xl">
            <OrderForm />
          </div>
        </div>
      </section>
    </>
  );
}
