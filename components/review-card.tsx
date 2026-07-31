import { Quote } from 'lucide-react'
import { StarRating } from '@/components/star-rating'
import type { Review } from '@/lib/reviews'

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
      <Quote className="size-7 text-primary/30" aria-hidden="true" />
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
        {review.text}
      </blockquote>
      {review.result && (
        <p className="mt-4 inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
          {review.result}
        </p>
      )}
      <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
        <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
          {review.name.charAt(0)}
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">{review.name}</p>
          <p className="text-xs text-muted-foreground">{review.city}, Pakistan</p>
        </div>
        <StarRating rating={review.rating} />
      </figcaption>
    </figure>
  )
}
