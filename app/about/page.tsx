import type { Metadata } from 'next'
import { Leaf, ShieldCheck, HeartHandshake, Truck } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { LinkButton } from '@/components/ui/link-button'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about SehatSlim — our mission to help people across Pakistan lose weight naturally with safe herbal products, free tools and honest guidance.',
  alternates: { canonical: `${site.url}/about` },
}

const values = [
  {
    icon: Leaf,
    title: 'Natural first',
    text: 'We believe in natural, herbal-based support rather than harsh chemicals or crash diets.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & honesty',
    text: 'No false promises. We share realistic expectations and clear usage guidance for every customer.',
  },
  {
    icon: HeartHandshake,
    title: 'Real support',
    text: 'From free diet plans to responsive customer care, we support your journey every step of the way.',
  },
  {
    icon: Truck,
    title: 'Easy COD delivery',
    text: 'Cash on Delivery across Pakistan means you only pay when your order reaches your door.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={`Helping Pakistan live healthier with ${site.name}`}
        description="We combine natural herbal products with free, practical tools to make healthy weight loss simple and affordable for everyone."
      />

      <section className="mx-auto max-w-3xl px-4">
        <div className="prose-custom space-y-5 text-muted-foreground">
          <p className="leading-relaxed">
            {site.name} was created with one simple goal: to make healthy weight loss accessible to
            ordinary people across Pakistan. We saw too many people spending money on expensive gym
            memberships, extreme diets and questionable products that promised overnight results.
          </p>
          <p className="leading-relaxed">
            Instead, we focus on a balanced approach — a natural herbal supplement designed to support your
            metabolism, paired with genuinely useful free resources like our calorie calculator, BMI
            calculator and desi-friendly diet plans.
          </p>
          <p className="leading-relaxed">
            We are honest about what our product can and cannot do. Sustainable results come from consistent
            healthy habits: balanced meals, regular movement, good sleep and hydration. Our job is to make
            that journey a little easier and a lot more affordable.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => {
            const Icon = v.icon
            return (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-secondary p-8 text-center">
          <h2 className="text-pretty font-serif text-2xl font-semibold">Start your journey today</h2>
          <p className="mx-auto mt-2 max-w-lg leading-relaxed text-muted-foreground">
            Join thousands of Pakistanis choosing a natural, sustainable path to a healthier weight.
          </p>
          <LinkButton href="/product" className="mt-6">
            Order Now (Cash on Delivery)
          </LinkButton>
        </div>
      </section>
    </>
  )
}
