import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { StarRating } from "@/components/star-rating";
import { LinkButton } from "@/components/ui/link-button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Success Stories | Real Lifestyle Progress",
  description:
    "Read encouraging customer stories about healthier routines, better consistency, and lifestyle progress with Dr. Rubina Official.",
  alternates: { canonical: `${site.url}/success-stories` },
};

type Story = {
  name: string;
  city: string;
  image?: string;
  focus: string;
  duration: string;
  rating: number;
  quote: string;
};

const stories: Story[] = [
  {
    name: "Ayesha Khan",
    city: "Lahore",
    image: "/story-1.png",
    focus: "Better consistency",
    duration: "3 months",
    rating: 5,
    quote:
      "After two pregnancies I wanted a more realistic routine. Better meal portions, daily walks, and a structured plan helped me feel more in control again.",
  },
  {
    name: "Bilal Ahmed",
    city: "Karachi",
    image: "/story-2.png",
    focus: "Higher daily energy",
    duration: "4 months",
    rating: 5,
    quote:
      "I have a desk job, so I needed something practical. The calculators and diet guidance helped me build a routine I could actually follow.",
  },
  {
    name: "Sana Malik",
    city: "Islamabad",
    focus: "Healthier food habits",
    duration: "2 months",
    rating: 4,
    quote:
      "What I loved most is that I did not have to give up desi food. The tips helped me make familiar meals lighter and more balanced.",
  },
  {
    name: "Usman Tariq",
    city: "Faisalabad",
    focus: "Steadier progress",
    duration: "6 months",
    rating: 5,
    quote:
      "Slow and steady really does work. Once I stopped crash dieting and focused on a better routine, everything felt more manageable.",
  },
  {
    name: "Hina Raza",
    city: "Multan",
    focus: "Better awareness",
    duration: "3 months",
    rating: 5,
    quote:
      "The calorie calculator opened my eyes to how much I was actually eating. Understanding my routine made healthier decisions much easier.",
  },
  {
    name: "Fahad Sheikh",
    city: "Rawalpindi",
    focus: "Ordering confidence",
    duration: "4 months",
    rating: 4,
    quote:
      "I appreciated the clear guidance and Cash on Delivery option. It felt much easier to start when the process was simple and transparent.",
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Success Stories"
        title="Real people, practical progress"
        description="These stories reflect the kind of routine-building progress customers aim for with balanced habits. Individual experiences vary."
      />

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <figure
              key={story.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                {story.image ? (
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={`${story.name} from ${story.city}`}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                    {story.name.charAt(0)}
                  </div>
                )}
                <div>
                  <figcaption className="font-semibold">{story.name}</figcaption>
                  <p className="text-sm text-muted-foreground">{story.city}</p>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {story.focus}
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {story.duration}
                </span>
              </div>

              <div className="mt-4">
                <StarRating rating={story.rating} />
              </div>

              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {`"${story.quote}"`}
              </blockquote>
            </figure>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-secondary p-8 text-center">
          <h2 className="text-pretty font-serif text-2xl font-semibold">
            Your story could be next
          </h2>
          <p className="mx-auto mt-2 max-w-lg leading-relaxed text-muted-foreground">
            Start with {site.name} and build a more consistent routine around
            healthier meals, daily movement, and practical support.
          </p>
          <LinkButton href="/product" className="mt-6">
            Explore the Product
          </LinkButton>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Disclaimer: These testimonials are illustrative placeholder content.
          Individual results vary, and outcomes depend on personal habits and
          lifestyle factors.
        </p>
      </section>
    </>
  );
}
