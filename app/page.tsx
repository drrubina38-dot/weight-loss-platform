import { Hero } from "@/components/home/hero";
import { Highlights } from "@/components/home/highlights";
import { Benefits } from "@/components/home/benefits";
import { HowItWorks } from "@/components/home/how-it-works";
import { ReviewsSection } from "@/components/home/reviews-section";
import { CtaBand } from "@/components/home/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";

import { faqs } from "@/lib/faq";
import { site } from "@/lib/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: site.name,
  url: site.url,
  logo: `${site.url}/icon.png`,

  description: site.description,

  email: site.email,
  telephone: site.phone,

  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },

  sameAs: [
    "https://www.instagram.com/drrubina06",
    "https://www.tiktok.com/@drrubina06",
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

      <JsonLd data={faqSchema} />
      <Hero />

      <Highlights />

      <Benefits />

      <HowItWorks />

      <ReviewsSection />

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Find answers to the most common questions about our product,
            delivery, Cash on Delivery, and customer support.
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
