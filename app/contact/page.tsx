import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Dr. Rubina Official for help with products, orders, delivery, and general support across Pakistan.",
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  const details = [
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: site.phone,
      href: `tel:${site.phone}`,
    },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },
    { icon: Clock, label: "Support Hours", value: "Mon-Sat, 9:00 AM - 8:00 PM" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="We'd love to hear from you"
        description="Have a question about the product, your order, or delivery? Reach out and our team will respond as quickly as possible."
      />

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {details.map((detail) => {
              const Icon = detail.icon;
              const content = (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {detail.label}
                    </p>
                    <p className="mt-0.5 font-semibold">{detail.value}</p>
                  </div>
                </div>
              );

              return detail.href ? (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="block transition hover:opacity-80"
                >
                  {content}
                </a>
              ) : (
                <div key={detail.label}>{content}</div>
              );
            })}
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
