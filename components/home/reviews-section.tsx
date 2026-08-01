import Link from "next/link";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { ReviewCard } from "@/components/review-card";
import { reviews } from "@/lib/reviews";

export function ReviewsSection() {
  return (
    <section className="bg-gradient-to-b from-secondary/30 to-background py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Customer Reviews
          </span>

          <h2 className="mt-5 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Trusted By Thousands
            <span className="block text-primary">Across Pakistan</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Read what our valued customers have shared about their experience
            with Dr. Rubina Official and our commitment to quality service.
          </p>
        </div>

        {/* Trust Stats */}

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          <div className="rounded-3xl border border-primary/10 bg-white p-6 text-center shadow-md">
            <Star className="mx-auto h-10 w-10 fill-yellow-400 text-yellow-400" />
            <h3 className="mt-3 text-3xl font-bold text-primary">4.9/5</h3>
            <p className="mt-1 text-sm text-muted-foreground">Average Rating</p>
          </div>

          <div className="rounded-3xl border border-primary/10 bg-white p-6 text-center shadow-md">
            <ShieldCheck className="mx-auto h-10 w-10 text-primary" />
            <h3 className="mt-3 text-3xl font-bold text-primary">100K+</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Happy Customers
            </p>
          </div>

          <div className="rounded-3xl border border-primary/10 bg-white p-6 text-center shadow-md">
            <ShieldCheck className="mx-auto h-10 w-10 text-primary" />
            <h3 className="mt-3 text-3xl font-bold text-primary">COD</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Available Nationwide
            </p>
          </div>
        </div>

        {/* Reviews */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 6).map((review) => (
            <div
              key={review.name}
              className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-14 text-center">
          <Link
            href="/success-stories"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-primary/90"
          >
            View All Customer Stories
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
