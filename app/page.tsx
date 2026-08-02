import type { Metadata } from "next";
import { Benefits } from "@/components/home/benefits";
import { CtaBand } from "@/components/home/cta-band";
import { Hero } from "@/components/home/hero";
import { Highlights } from "@/components/home/highlights";
import { HowItWorks } from "@/components/home/how-it-works";
import { ReviewsSection } from "@/components/home/reviews-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { faqs } from "@/lib/faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Herbal Weight Management Support in Pakistan",
  description:
    "Explore Dr. Rubina Official for herbal weight management support, healthy lifestyle guidance, BMI and calorie calculators, and nationwide Cash on Delivery in Pakistan.",
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: `${site.name} | Herbal Weight Management Support in Pakistan`,
    description:
      "Herbal wellness support, healthy lifestyle resources, and Cash on Delivery service across Pakistan.",
    url: site.url,
    images: [
      {
        url: site.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Dr. Rubina Official herbal wellness lifestyle",
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/apple-icon.png`,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressCountry: site.country,
    addressLocality: site.city,
  },
  sameAs: [site.instagram, site.tiktok],
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
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <Hero />
      <Highlights />
      <Benefits />
      <HowItWorks />
      <ReviewsSection />
      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Frequently Asked Questions
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Clear answers before you place an order
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Find practical information about delivery, support, lifestyle
            guidance, and how to use Dr. Rubina Official as part of a balanced
            routine.
          </p>
        </div>
        <div className="mt-10">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
