import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { StarRating } from '@/components/star-rating'
import { LinkButton } from '@/components/ui/link-button'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Success Stories — Real Weight Loss Transformations',
  description:
    'Read inspiring weight-loss success stories from real people who transformed their health with SehatSlim and healthy habits.',
  alternates: { canonical: `${site.url}/success-stories` },
}

type Story = {
  name: string
  city: string
  image?: string
  lost: string
  duration: string
  rating: number
  quote: string
}

const stories: Story[] = [
  {
    name: 'Ayesha Khan',
    city: 'Lahore',
    image: '/story-1.png',
    lost: '9 kg',
    duration: '3 months',
    rating: 5,
    quote:
      'After two pregnancies I struggled to lose weight. With SehatSlim, portion control and daily walks, I finally feel like myself again. The COD service made ordering so easy.',
  },
  {
    name: 'Bilal Ahmed',
    city: 'Karachi',
    image: '/story-2.png',
    lost: '12 kg',
    duration: '4 months',
    rating: 5,
    quote:
      'I have a desk job and used to feel tired all the time. Combining the diet plans on this site with the supplement gave me steady energy and real results.',
  },
  {
    name: 'Sana Malik',
    city: 'Islamabad',
    lost: '6 kg',
    duration: '2 months',
    rating: 4,
    quote:
      'What I loved most is that I did not have to give up desi food. The tips helped me cook the same dishes in a healthier way. Highly recommended.',
  },
  {
    name: 'Usman Tariq',
    city: 'Faisalabad',
    lost: '15 kg',
    duration: '6 months',
    rating: 5,
    quote:
      'Slow and steady really works. I lost weight without crash dieting, and my cravings for late-night snacks reduced a lot within a few weeks.',
  },
  {
    name: 'Hina Raza',
    city: 'Multan',
    lost: '8 kg',
    duration: '3 months',
    rating: 5,
    quote:
      'The calorie calculator opened my eyes to how much I was actually eating. Once I understood my needs, losing weight became so much simpler.',
  },
  {
    name: 'Fahad Sheikh',
    city: 'Rawalpindi',
    lost: '10 kg',
    duration: '4 months',
    rating: 4,
    quote:
      'Great support and a genuine natural product. Delivery was on time and paying cash at the door gave me peace of mind for my first order.',
  },
]

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Success Stories"
        title="Real people, real results"
        description="These stories reflect the kind of results our customers aim for with consistent healthy habits. Results vary from person to person."
      />

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((s) => (
            <figure
              key={s.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                {s.image ? (
                  <img
                    src={s.image || "/placeholder.svg"}
                    alt={`${s.name} from ${s.city}`}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                    {s.name.charAt(0)}
                  </div>
                )}
                <div>
                  <figcaption className="font-semibold">{s.name}</figcaption>
                  <p className="text-sm text-muted-foreground">{s.city}</p>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Lost {s.lost}
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  in {s.duration}
                </span>
              </div>

              <div className="mt-4">
                <StarRating rating={s.rating} />
              </div>

              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {`"${s.quote}"`}
              </blockquote>
            </figure>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-secondary p-8 text-center">
          <h2 className="text-pretty font-serif text-2xl font-semibold">Your story could be next</h2>
          <p className="mx-auto mt-2 max-w-lg leading-relaxed text-muted-foreground">
            Start with {site.name} today and take the first step toward a healthier, more confident you.
          </p>
          <LinkButton href="/product" className="mt-6">
            Order Now (Cash on Delivery)
          </LinkButton>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Disclaimer: Testimonials are illustrative placeholder content. Individual results vary and are not
          guaranteed. This product is not intended to diagnose, treat, cure or prevent any disease.
        </p>
      </section>
    </>
  )
}
