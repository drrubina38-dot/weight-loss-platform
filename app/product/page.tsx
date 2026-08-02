import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  Check,
  CheckCircle2,
  Clock3,
  FlaskConical,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { OrderForm } from "@/components/order-form";
import { ProductGallery } from "@/components/product-gallery";
import { StarRating } from "@/components/star-rating";
import { LinkButton } from "@/components/ui/link-button";
import { posts } from "@/lib/blog";
import { product } from "@/lib/product";
import { site } from "@/lib/site";

const productFaqs = [
  {
    question: "Is Cash on Delivery available in Pakistan?",
    answer: "Yes. Cash on Delivery is available across Pakistan.",
  },
  {
    question: "How long does delivery usually take?",
    answer: "Orders are usually delivered within 2-4 working days.",
  },
  {
    question: "How should I use this product?",
    answer:
      "Use the product according to the instructions provided with the package and pair it with balanced meals, hydration, and regular physical activity.",
  },
  {
    question: "Does this replace diet and exercise?",
    answer:
      "No. It is intended to support a healthy lifestyle, not replace nutritious eating, movement, or medical guidance.",
  },
];

const trustBadges = [
  {
    icon: ShieldCheck,
    title: "Original product support",
    text: "Order from the official website for direct support and confirmation.",
  },
  {
    icon: Truck,
    title: "Nationwide delivery",
    text: "Cash on Delivery service is available all over Pakistan.",
  },
  {
    icon: Leaf,
    title: "Herbal lifestyle support",
    text: "Designed to complement healthy routines and realistic expectations.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp assistance",
    text: "Get help with ordering, delivery, and basic product questions.",
  },
];

const relatedPosts = posts
  .filter((post) =>
    [
      "home-workout-plan-for-beginners-no-gym-required",
      "top-20-healthy-pakistani-foods-for-weight-management",
      "10-daily-habits-that-support-healthy-weight-management",
    ].includes(post.slug),
  )
  .slice(0, 3);

export const metadata: Metadata = {
  title: "Dr Rubina Herbal Weight Loss Powder | Official Product Page",
  description:
    "Explore ingredients, usage guidance, FAQs, and Cash on Delivery details for Dr Rubina Herbal Weight Loss Powder in Pakistan.",
  alternates: {
    canonical: `${site.url}/product`,
  },
  openGraph: {
    title: "Dr Rubina Herbal Weight Loss Powder | Official Product Page",
    description:
      "Product details, herbal ingredients, delivery information, and official ordering support from Dr. Rubina Official.",
    url: `${site.url}/product`,
    type: "website",
    images: [
      {
        url: product.images[0],
        width: 1200,
        height: 1200,
        alt: `${product.name} packaging`,
      },
    ],
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
          image: product.images.map((image) => `${site.url}${image}`),
          description: product.tagline,
          sku: "DRP-001",
          category: "Herbal wellness support",
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: productFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
      <JsonLd
        data={{
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
          ],
        }}
      />

      <section className="mx-auto max-w-6xl px-4 py-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <ProductGallery />

          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <Leaf className="size-3.5" />
              Dr. Rubina Official
            </span>
            <h1 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              {product.name}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <StarRating rating={product.rating} />
              <span className="text-sm text-muted-foreground">
                {product.rating}/5 customer rating
              </span>
            </div>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {product.tagline}
            </p>

            <div className="mt-5 flex flex-wrap items-end gap-3">
              <span className="text-3xl font-bold text-foreground">
                {site.currency} {product.price.toLocaleString()}
              </span>
              <span className="text-lg text-muted-foreground line-through">
                {site.currency} {product.oldPrice.toLocaleString()}
              </span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
                Cash on Delivery available
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {product.servings}
            </p>

            <ul className="mt-6 space-y-2.5">
              {product.benefits.slice(0, 4).map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2.5 text-sm text-foreground"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="#order" size="lg">
                Order now
              </LinkButton>
              <LinkButton href="/blog" variant="outline" size="lg">
                Read wellness articles
              </LinkButton>
            </div>

            <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              {trustBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="rounded-2xl border border-border bg-card p-4 shadow-sm"
                >
                  <badge.icon className="size-5 text-primary" />
                  <h2 className="mt-3 font-semibold text-foreground">
                    {badge.title}
                  </h2>
                  <p className="mt-1 leading-6 text-muted-foreground">
                    {badge.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span aria-hidden="true">⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐</span>
        </div>
      </div>

      <section id="order" className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[2.25rem] border border-border bg-card p-8 shadow-[0_24px_80px_rgba(31,122,69,0.12)] sm:p-10">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Cash on Delivery
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                Place your order
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Cash on Delivery available across Pakistan
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Secure ordering • Fast dispatch • Customer confirmation before
                shipping
              </p>
            </div>

            <div className="mt-10">
              <OrderForm />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span aria-hidden="true">⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐</span>
        </div>
      </div>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center gap-2">
            <FlaskConical className="size-6 text-primary" />
            <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              Natural ingredients
            </h2>
          </div>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Carefully selected ingredients intended to support a healthy
            lifestyle and consistent daily routine.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.ingredients.map((ingredient) => (
              <div
                key={ingredient.name}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <h3 className="font-semibold text-foreground">
                  {ingredient.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {ingredient.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              Why customers choose it
            </h2>
            <ul className="mt-6 space-y-3">
              {product.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckCircle2 className="size-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <Clock3 className="size-6 text-primary" />
              <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                How to use it
              </h2>
            </div>
            <ol className="mt-6 space-y-3">
              {product.usage.map((step, index) => (
                <li
                  key={step}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  <span className="text-sm text-foreground">{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-5">
              <h3 className="font-semibold text-foreground">
                Helpful reminder
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                This product is intended to support healthy weight management as
                part of a balanced routine. Results vary from person to person.
              </p>
            </div>
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

      <section className="bg-background py-6">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Learn more
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-foreground">
                  Helpful reads before you order
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-sm font-semibold text-primary hover:underline"
              >
                Browse all articles
              </Link>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-2xl border border-border bg-background p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {post.category}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Product FAQs
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground">
              Common ordering and usage questions
            </h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              We keep the guidance clear so you can order with confidence and
              understand how the product fits into a healthy routine.
            </p>
          </div>
          <FaqAccordion faqs={productFaqs} />
        </div>
      </section>
    </>
  );
}
