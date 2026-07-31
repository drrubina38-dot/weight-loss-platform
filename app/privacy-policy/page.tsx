import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${site.name} collects, uses and protects your personal information.`,
  alternates: { canonical: `${site.url}/privacy-policy` },
  robots: { index: true, follow: true },
}

const sections = [
  {
    heading: 'Information we collect',
    body: [
      'When you place a Cash on Delivery order or contact us, we collect the details you provide such as your full name, mobile number, city and delivery address. We use this information only to process and deliver your order and to provide customer support.',
    ],
  },
  {
    heading: 'How we use your information',
    body: [
      'Your information is used solely to fulfil your orders, arrange delivery, respond to your enquiries and improve our service. We do not sell or rent your personal information to third parties.',
    ],
  },
  {
    heading: 'Data sharing',
    body: [
      'We may share your delivery details with trusted courier partners strictly for the purpose of delivering your order. These partners are required to keep your information secure.',
    ],
  },
  {
    heading: 'Data security',
    body: [
      'We take reasonable measures to protect your personal information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    heading: 'Cookies & analytics',
    body: [
      'Our website may use basic cookies and privacy-friendly analytics to understand how visitors use the site and to improve performance. You can disable cookies in your browser settings.',
    ],
  },
  {
    heading: 'Your rights',
    body: [
      'You may request access to, correction of, or deletion of your personal data at any time by contacting us at ' +
        site.email +
        '.',
    ],
  },
  {
    heading: 'Changes to this policy',
    body: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Your privacy matters to us. This policy explains how we handle your information."
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
