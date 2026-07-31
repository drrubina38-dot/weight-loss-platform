import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CalorieCalculator } from '@/components/calorie-calculator'
import { LinkButton } from '@/components/ui/link-button'

export const metadata: Metadata = {
  title: 'Free Calorie Calculator — Daily Calorie Needs',
  description:
    'Calculate your daily calorie needs based on age, gender, height, weight and activity level. Free calorie calculator for weight loss in Pakistan.',
  alternates: { canonical: '/calorie-calculator' },
}

export default function CalorieCalculatorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Tool"
        title="Calorie Calculator"
        description="Find out how many calories you need each day to maintain or lose weight, based on your body and activity level."
      />
      <section className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
        <CalorieCalculator />

        <div className="mt-12 rounded-2xl border border-border bg-secondary/40 p-6 text-center sm:p-8">
          <h2 className="font-serif text-xl font-semibold text-foreground">Ready to hit your calorie goal?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Pair your calorie target with our free desi diet plans and SehatSlim herbal support for the best results.
          </p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <LinkButton href="/diet-plans">View Diet Plans</LinkButton>
            <LinkButton href="/product#order" variant="outline">
              Order SehatSlim
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  )
}
