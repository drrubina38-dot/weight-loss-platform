import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the SehatSlim team. We are happy to answer your questions about our products, orders and delivery across Pakistan.',
  alternates: { canonical: `${site.url}/contact` },
}

export default function ContactPage() {
  const details = [
    { icon: Phone, label: 'Phone / WhatsApp', value: site.phone, href: `tel:${site.phone}` },
    { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan' },
    { icon: Clock, label: 'Support Hours', value: 'Mon–Sat, 9:00 AM – 8:00 PM' },
  ]

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="We'd love to hear from you"
        description="Have a question about our product, your order or delivery? Reach out and our team will respond quickly."
      />

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {details.map((d) => {
              const Icon = d.icon
              const content = (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{d.label}</p>
                    <p className="mt-0.5 font-semibold">{d.value}</p>
                  </div>
                </div>
              )
              return d.href ? (
                <a key={d.label} href={d.href} className="block transition hover:opacity-80">
                  {content}
                </a>
              ) : (
                <div key={d.label}>{content}</div>
              )
            })}
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
