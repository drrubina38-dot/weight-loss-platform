import { Hero } from "@/components/home/hero";
import { Highlights } from "@/components/home/highlights";
import { Benefits } from "@/components/home/benefits";
import { HowItWorks } from "@/components/home/how-it-works";
import { ReviewsSection } from "@/components/home/reviews-section";
import { CtaBand } from "@/components/home/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { faqs } from "@/lib/faq";
import { product } from "@/lib/product";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",

          name: product.name,

          image: product.images.map((img) => `${site.url}${img}`),

          description: product.tagline,

          sku: "DRR-001",

          category: "Herbal Wellness",

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
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />

      <Hero />
      <Highlights />
      <Benefits />
      <HowItWorks />
      <ReviewsSection />

      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            FAQ
          </p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-10">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
