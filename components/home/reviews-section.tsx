import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ReviewCard } from '@/components/review-card'
import { reviews } from '@/lib/reviews'

export function ReviewsSection() {
  return (
    <section className="bg-secondary/40 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Reviews</p>
          <h2 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Loved by customers across Pakistan
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 6).map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/success-stories"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Read more success stories <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
