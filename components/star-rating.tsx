import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            'size-4',
            i < Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'fill-muted text-muted',
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}
