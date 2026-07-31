import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: `The terms and conditions governing your use of ${site.name} and our Cash on Delivery service.`,
  alternates: { canonical: `${site.url}/terms` },
  robots: { index: true, follow: true },
}

const sections = [
  {
    heading: 'Acceptance of terms',
    body: [
      `By accessing this website and placing an order, you agree to these Terms & Conditions. If you do not agree, please do not use ${site.name}.`,
    ],
  },
  {
    heading: 'Products & information',
    body: [
      'We aim to describe our products as accurately as possible. Our supplement is a natural herbal product intended to support a healthy lifestyle. It is not a medicine and is not intended to diagnose, treat, cure or prevent any disease.',
    ],
  },
  {
    heading: 'Orders & Cash on Delivery',
    body: [
      'All orders are placed on a Cash on Delivery (COD) basis. You pay the courier in cash when your order is delivered. By placing an order you confirm that the delivery details provided are accurate and that you intend to receive and pay for the order.',
    ],
  },
  {
    heading: 'Cancellations & returns',
    body: [
      'You may cancel your order before it is dispatched by contacting us. If you receive a damaged or incorrect item, please contact us within 48 hours of delivery and we will arrange a suitable resolution.',
    ],
  },
  {
    heading: 'Health disclaimer',
    body: [
      'Always consult a qualified healthcare professional before starting any weight-loss product, especially if you are pregnant, nursing, under 18, or have a medical condition. The tools and content on this site are for general information only and do not constitute medical advice.',
    ],
  },
  {
    heading: 'Limitation of liability',
    body: [
      'To the maximum extent permitted by law, we are not liable for any indirect or consequential loss arising from the use of our website, products, or tools. Results from using our product vary from person to person.',
    ],
  },
  {
    heading: 'Contact',
    body: [`For any questions about these terms, contact us at ${site.email} or ${site.phone}.`],
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Please read these terms carefully before using our website and placing an order."
      />
      <section className="mx-auto max-w-3xl px-4 pb-20">
        <p className="mb-8 text-sm text-muted-foreground">Last updated: 1 January 2026</p>
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="mb-2 font-serif text-xl font-semibold">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
